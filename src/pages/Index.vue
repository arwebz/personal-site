<template lang="pug">
  Layout
    // Intro
    section#intro.main.style1.dark.fullscreen(v-in-viewport)
      .content
        header
          h2 Web Developer.
        ul.tags
          li Learner
          li Full-stack
          li Front-end focused
        footer
          ClientOnly
            a.button.style2.down(href='#one' v-smooth-scroll) More
    // One
    section#one.main.style2.right.dark.fullscreen(v-in-viewport)
      .content.box.style2
        header
          h2 What I Do
        p
          | I am a Senior Software Engineer at
          |
          a(href="https://seatzapp.com" target="_blank" rel="noopener noreferrer") sEATz
          | .
        p
          | Our software is used to support the business which is concerned
          | with making it easier and more convenient to order concession-stand
          | food and souvenirs without leaving the comfort of your seat. Why
          | should taking your kids to a sporting event make it difficult to
          | order food, drinks, and alcohol but also enjoy every minute of the
          | game.  With sEATz it doesn't have to be, because we will deliver it
          | all to you!
      ClientOnly
        a.button.style2.down.anchored(href='#two' v-smooth-scroll) Next
    // Two
    section#two.main.style2.left.dark.fullscreen(v-in-viewport)
      .content.box.style2
        header
          h2 Who I Am
        p
          | I am an adaptable software development professional
          | eager to push the boundaries of my knowledge of software
          | development technologies and methods. I have a solid background in
          | Computer Science, having graduated with a B.S. from Texas A&M
          | University; and with 3+ years experience in consulting and software engineering, I am
          | well-versed in several technology stacks. When I'm not poring over
          | well-written documentation you can find me exercising, playing
          | with my 3 cats, or spending time with my wife.
      ClientOnly
        a.button.style2.down.anchored(href='#work' v-smooth-scroll) Next
    // Work
    section#work.main.style3.primary.fullscreen
      .content
        header
          h2 My Work
          p
            | My ability to learn new things and get up to speed quickly is
            | demonstrated by the diversity of technologies used in the various
            | projects I have been a part of.
        // Gallery
        projects
    // Contact
    section#contact.main.style3.secondary(v-in-viewport)
      .content
        header#say-hello
          h2 Say Hello.
          p
            | We, as humans, are stronger when we put our minds together; so
            | let's connect!

        .box
          contact-me
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import ContactMe from "~/components/ContactMe";
import Projects from "~/components/Projects";
export default {
  components: {
    ContactMe,
    Projects
  },
  data() {
    return {
      areImagesHidden: false
    };
  },
  computed: {
    galleryArticleClass() {
      return {
        hidden: this.areImagesHidden
      };
    }
  },
  methods: {
    hideImages() {
      this.areImagesHidden = true;
    }
  }
};
</script>
