---
title: Programming is Like Writing Prose
date: 2015/12/20
excerpt: >
  Programming can be an artful craft. Last summer I read a book called Clean
  Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin. Martin
  talks about the ways to improve old code as well as how to write new, readable,
  maintainable code using test-driven development (TDD). He likens programming to
  composition. You wouldn't pass off your rough draft as the final draft would
  you?
tags:
  - c++
  - clean code
---

Programming can be an artful craft. Last summer I read a book called Clean
Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin. Martin
talks about the ways to improve old code as well as how to write new, readable,
maintainable code using test-driven development (TDD). He likens programming to
composition. You wouldn't pass off your rough draft as the final draft would
you?

I think it is best if I demonstrate with actual code. Today, I wrote a Base64
encoder using TDD for my FrackCrypt project. Take this class implementation,
the "rough draft", for example (hint: you don't actually have to read it):

```cpp
const std::string Encoder::base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

Encoder::Encoder() {

}

std::string Encoder::operator()(std::string to_encode) {
  std::ostringstream base64;
  std::string padding;
  std::vector<std::string> chunks;
  uint8_t chunk1, chunk2, chunk3, chunk4;

  for (uint64_t i = 0; i < to_encode.length(); i += 3) {
    chunks.push_back(std::string(to_encode, i, 3));
  }

  for (uint64_t i = 0; i < chunks.size(); ++i) {
    const std::string& working_chunk = chunks[i];
    if (chunks[i].length() == 3) {
      chunk1 = working_chunk[0] >> 2;
      chunk2 = ((working_chunk[0] & 0x3) << 4) | (working_chunk[1] >> 4);
      chunk3 = ((working_chunk[1] & 0xF) << 2) | (working_chunk[2] >> 6);
      chunk4 = working_chunk[2] & 0x3F;
      base64 << (char)base64_chars[chunk1] << (char)base64_chars[chunk2] << (char)base64_chars[chunk3] << (char)base64_chars[chunk4];
    } else if (chunks[i].length() == 2) {
      chunk1 = working_chunk[0] >> 2;
      chunk2 = ((working_chunk[0] & 0x3) << 4) | (working_chunk[1] >> 4);
      chunk3 = (working_chunk[1] & 0xF) << 2;
      base64 << (char)base64_chars[chunk1] << (char)base64_chars[chunk2] << (char)base64_chars[chunk3];
      padding = "=";
    } else {
      chunk1 = to_encode[0] >> 2;
      chunk2 = (to_encode[0] & 0x3) << 4;
      base64 << (char)base64_chars[chunk1] << (char)base64_chars[chunk2];
      padding = "==";
    }
  }

  base64 << padding;
  return base64.str();
}
```

Most people probably wouldn't want to read that--I wouldn't want to read that!
Not only is it unsightly, but it is also inconsistent. The code is this way
because I quickly wrote it to satisfy automated tests that I wrote a day or so
ago. However, there is no way I could come back to this code next week and be
able to figure out what on earth I wrote, let alone some innocent bystander. To
fix this, I did like most writers do: I revised, or refactored, in order to get
to a "final draft":

```cpp
const std::string Encoder::base64_chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

Encoder::Encoder() {}

std::string Encoder::operator()(std::string to_encode) {
  reset();
  chunkify(to_encode);
  encode_chunks();
  add_padding();
  return base64.str();
}

void Encoder::reset() {
  base64.str("");
  chunks.clear();
}

void Encoder::chunkify(std::string to_encode) {
  for (uint64_t i = 0; i < to_encode.length(); i += 3)
    chunks.push_back(std::string(to_encode, i, 3));
}

void Encoder::encode_chunks() {
  for (uint64_t i = 0; i < chunks.size(); ++i)
    encode_chunk(chunks[i]);
}

void Encoder::encode_chunk(std::string chunk) {
  working_chunk = chunk;
  encode_bytes();
  append_codes();
}

void Encoder::encode_bytes() {
  encode_first_byte();
  if (working_chunk.length() > 1)
    encode_second_byte();
  if (working_chunk.length() > 2)
    encode_third_byte();
}

void Encoder::encode_first_byte() {
  code1 = working_chunk[0] >> 2;
  code2 = (working_chunk[0] & 0x3) << 4;
}

void Encoder::encode_second_byte() {
  code2 |= (working_chunk[1] >> 4);
  code3 = (working_chunk[1] & 0xF) << 2;
}

void Encoder::encode_third_byte() {
  code3 |= working_chunk[2] >> 6;
  code4 = working_chunk[2] & 0x3F;
}

void Encoder::append_codes() {
  base64 << base64_chars[code1] << base64_chars[code2];
  if (working_chunk.length() > 1)
    base64 << base64_chars[code3];
  if (working_chunk.length() > 2)
    base64 << base64_chars[code4];
}

void Encoder::add_padding() {
  std::string last_chunk = chunks.back();
  size_t padding_amount = 3 - last_chunk.length();
  std::string padding(padding_amount, '=');
  base64 << padding;
}
```

Woah, that's a lot longer! As surprising as it may sound, the code above does
almost exactly the same thing as the code before (with one small change in
order to meet new requirements). I hope it is easier to read though. Just like
with prose, people find it easier to read when ideas are separated into
paragraphs. That's why there are so many functions: there are so many ideas
that were packed into one big paragraph before. In some cases, the functions
can be understood out of context, but the context laid down by the function
that came before can help with the comprehension.

Believe me, though: the former version of the code went through several
revisions before becoming the code in the latter. Just as a writer must massage
his rough draft to come up with a final draft, a programmer must massage his
mediocre code in order to make it clean.

---

I left out the class definition to keep this post brief. You can find the class
definition as well as the code in this post on
[Github](https://github.com/Towerism/FrackCrypt/tree/develop/frackcrypt/tools/base64).
