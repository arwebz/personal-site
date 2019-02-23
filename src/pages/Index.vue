<template lang="pug">
  Layout
    nav-menu
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
          a.button.style2.down(href='#one' v-smooth-scroll) More
    // One
    section#one.main.style2.right.dark.fullscreen(v-in-viewport)
      .content.box.style2
        header
          h2 What I Do
        p
          | I along with my company, Improving, am bringing trust back into the
          | consulting industry. As a software consultant, I create software
          | for various clients in the Houston area helping them leverage their
          | strategic advantage.
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
          | University; and with 3+ years experience in Software Consulting, I am
          | well-versed in several technology stacks. When I'm not poring over
          | well-written documentation you can find me exercising, playing
          | with my 3 cats, or spending time with my wife.
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
          p We, as humans, are stronger when we put our minds together; so let's connect!
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
import Projects from "~/components/Projects";
export default {
  components: {
    NavMenu,
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
