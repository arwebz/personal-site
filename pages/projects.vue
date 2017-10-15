<template>
  <page-section title="Projects">
    <b-card-group columns>
      <project name="ARM Lenda" time="June 2016 to Present" link="www.armlend.com" client="Ag Resource Management">
        Currently working in a team of six developers to develop a management
        operations web application for a company which provides risk management
        solutions for agribusiness. Using the Agile Scrum methodology and
        technologies such as Vue.js, Angular.js, ASP.NET Web API, Jasmine, Twitter
        Bootstrap, Highway Data, altogether my role has been that of a full stack
        developer. The front-end is currently going through a major rewrite from
        Angular.js to Vue.js. Since the product's release, ARM has closed more
        than a half-billion dollars worth of loans.
      </project>
      <project name="Interview App" time="April 2016 to June 2016" link="www.improving.com" internal>
        Configured, designed, and developed the initial iteration of a web
        application that would allow hiring staff to record and view candidate
        details online. Using technologies such as ASP.NET MVC, Highway Data,
        RavenDB, and Twitter Bootstrap, my role was that of a full stack
        developer.
      </project>
      <project name="High Noon" time="Feb 2016 to Apr 2016" link="https://github.com/gwydirsam/DickGrayson" github>
        Worked in a team of seven students to put together a game of reaction time
        that could be played by two people on the same iOS device. My role was to
        coordinate graphics and user interface design as well as to oversee
        integration of user interface and game rules implementations in the Unity
        3D game engine.
      </project>
      <project name="Crypto-Security App" time="April 2014 to May 2014" link="https://github.com/gwydirsam/DickGrayson" github>
        Using agile scrum and test-driven development, a small team including me
        developed a security suite for encrypting and decrypting files, cracking
        encrypted files, and hiding and retrieving data using image and audio
        steganography. My roll was to implement image and audio steganography to
        hide data.
      </project>
      <project name="Scalable Chat Room" time="Jan 2017 to April 2017" link="https://github.com/Towerism/csce438-hw4" github>
        Worked in a group of two to develop a scalable chat room service. Using
        Google Protobuf, Google RPC, and C++, managed to create a fault tolerant
        system through which users could communicate with each other across
        multiple devices.
      </project>
    </b-card-group>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Project from '~/components/Project'
export default {
  components: {
    PageSection,
    Project
  }
}
</script>

