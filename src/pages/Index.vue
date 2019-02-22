<template lang="pug">
  Layout
    nav-menu
    // Intro
    section#intro.main.style1.dark.fullscreen
      .content
        header
          h2 Hey.
        p
          | Welcome to
          strong  Big Picture
          |  a responsive site template designed by
          |
          a(href='https://html5up.net') HTML5 UP
          br
          | and released for free under the
          |
          a(href='https://html5up.net/license') Creative Commons Attribution license.
        footer
          a.button.style2.down(href='#one' v-smooth-scroll) More
    // One
    section#one.main.style2.right.dark.fullscreen
      .content.box.style2
        header
          h2 What I Do
        p
          | Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
          | Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
          | id varius justo euismod in. Curabitur egestas consectetur magna.
      a.button.style2.down.anchored(href='#two' v-smooth-scroll) Next
    // Two
    section#two.main.style2.left.dark.fullscreen
      .content.box.style2
        header
          h2 Who I Am
        p
          | Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
          | Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
          | id varius justo euismod in. Curabitur egestas consectetur magna.
      a.button.style2.down.anchored(href='#work' v-smooth-scroll) Next
    // Work
    section#work.main.style3.primary
      .content
        header
          h2 My Work
          p
            | Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
            | Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
            | arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.
        // Gallery
        .gallery
          article.from-left
            a.image.fit(href='/images/fulls/01.jpg')
              img(src='/images/thumbs/01.jpg', title='The Anonymous Red', alt='')
          article.from-right
            a.image.fit(href='/images/fulls/02.jpg')
              img(src='/images/thumbs/02.jpg', title='Airchitecture II', alt='')
          article.from-left
            a.image.fit(href='/images/fulls/03.jpg')
              img(src='/images/thumbs/03.jpg', title='Air Lounge', alt='')
          article.from-right
            a.image.fit(href='/images/fulls/04.jpg')
              img(src='/images/thumbs/04.jpg', title='Carry on', alt='')
          article.from-left
            a.image.fit(href='/images/fulls/05.jpg')
              img(src='/images/thumbs/05.jpg', title='The sparkling shell', alt='')
          article.from-right
            a.image.fit(href='/images/fulls/06.jpg')
              img(src='/images/thumbs/06.jpg', title='Bent IX', alt='')
    // Contact
    section#contact.main.style3.secondary
      .content
        header
          h2 Say Hello.
          p Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
        .box
          form(method='post', action='#')
            .fields
              .field.half
                input(type='text', name='name', placeholder='Name')
              .field.half
                input(type='email', name='email', placeholder='Email')
              .field
                textarea(name='message', placeholder='Message', rows='6')
            ul.actions.special
              li
                input(type='submit', value='Send Message')
    // Footer
    footer#footer
      // Icons
      ul.icons
        li
          a.icon.fa-twitter(href='#')
            span.label Twitter
        li
          a.icon.fa-facebook(href='#')
            span.label Facebook
        li
          a.icon.fa-instagram(href='#')
            span.label Instagram
        li
          a.icon.fa-linkedin(href='#')
            span.label LinkedIn
        li
          a.icon.fa-dribbble(href='#')
            span.label Dribbble
        li
          a.icon.fa-pinterest(href='#')
            span.label Pinterest
      // Menu
      ul.menu
        li © 2019 Martin Fracker, Jr.
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import NavMenu from "~/components/NavMenu";
export default {
  components: {
    NavMenu
  }
};
</script>
