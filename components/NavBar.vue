<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="light")
    b-nav-toggle(target="nav_collapse")
    b-navbar-brand(href="javascript:void(0)") Martin Fracker, Jr.
    b-collapse(is-nav id="nav_collapse")
      b-nav(is-nav-bar)
        b-nav-item(to="/" :exact="true") Home
        b-nav-item(to="/projects") Projects
        b-nav-item-dropdown#resume-nav(text="Resume" right)
          b-dropdown-item(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.pdf") PDF
          b-dropdown-item(href="https://github.com/Towerism/resume/raw/master/fracker-martin-resume.txt") Plain Text
        b-nav-item(href="http://www.github.com/towerism") Github
</template>

