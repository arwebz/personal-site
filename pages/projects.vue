<template>
  <div>
    <project name="ARM Lenda" time="June 2016 to July 2018" link="http://www.armlend.com" client="Ag Resource Management">
      Worked in a cross-functional scrum team to develop a management
      operations web application for a company which provides risk management
      solutions for agribusiness. Within the first year in production, closed
      more than a half-billion dollars’ worth of loans. Set up continuous
      delivery using Jenkin and Azure, later using Visual Studio Team Services,
      allowing my team to deploy multiple times per week. Interested in
      upgrading the tech stack, team looked into Vue.js, Angular, .NET core,
      and Docker. Using the Agile Scrum methodology together with test-driven
      development and technologies such as AngularJS, Vue.js, Angular, ASP.NET
      Web API, .NET Core, Jasmine, Jenkins, Azure, Visual Studio Team Services,
      Docker, Selenium, Protractor.NET, Twitter Bootstrap, and Entity
      Framework, my role was that of a full stack developer.
    </project>
    <project name="Morphling" time="Jan 2017 to April 2017" link="https://github.com/Towerism/morphling" github>
      Worked in a group of three to develop a generalized board game server in
      order to facilitate a wide variety of games between two players without
      duplicating a lot of the server boilerplate. My role was to create a
      framework to capture board game logic and to write to example games in
      the framework.
    </project>
    <project name="Scalable Chat Room" time="Jan 2017 to April 2017" link="https://github.com/Towerism/csce438-hw4" github>
      Worked in a group of two to develop a scalable chat room service. Using
      Google Protobuf, Google RPC, and C++, managed to create a fault tolerant
      system through which users could communicate with each other across
      multiple devices.
    </project>
    <project name="Interview App" time="April 2016 to June 2016" link="https://www.improving.com" internal>
      Configured, designed, and developed the initial iteration of a web
      application that would allow hiring staff to record and view candidate
      details online. Using technologies such as ASP.NET MVC, Highway Data,
      RavenDB, and Twitter Bootstrap, my role was that of a full stack
      developer.
    </project>
    <project name="High Noon" time="Feb 2016 to Apr 2016">
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
      steganography. My role was to implement image and audio steganography to
      hide data.
    </project>
  </div>
</template>

<script>
import Coding from '~/assets/img/coding.jpeg'
import Project from '~/components/Project'
export default {
  components: {
    Project
  },
  data () {
    return {
      heroBackground: Coding
    }
  },
  mounted () {
    this.setPageInfo({
      title: 'Projects',
      subtitle: 'The best thing about starting a new project is the satisfaction I get from learning something new.',
      image: this.heroBackground,
      heroType: 'is-dark'
    })
  }
}
</script>

