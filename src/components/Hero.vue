<template>
  <div
    class="flex flex-col md:flex-row md:items-center justify-center max-w-7xl m-auto mt-24 md:pt-10"
  >
    <div class="info flex flex-col items-start md:w-full md:pr-8">
      <h2
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="500"
        class="text-5xl pb-3 font-extrabold f-black name duration-1000 typewriter dark:text-blue-500 whitespace-nowrap"
      >
        Hi, I'm Jemark👋
      </h2>
      <small
        class="text-lg pb-2 f-gray dark:text-white duration-1000"
        style="font-size: 0.79rem;"  
        data-aos="fade-right"
        data-aos-delay="700"
        data-aos-duration="500"
        >
        <span style="color: #9A5299;">GRAPHIC DESIGNER</span> | 
        <span style="color: #CC65A9;">UI/UX DESIGNER</span> | 
        <span style="color: #E687B8;">WEB DEVELOPER</span>
      </small>
      <h5
        class="text-sm pb-12 f-gray dark:text-white duration-1000"
        data-aos="fade-right"
        data-aos-delay="800"
        data-aos-duration="500"
        style="text-align: justify;"
      >
      I aim to use and impart the capabilities I gained to facilitate and provide the necessary learning required to 
      develop and compete in today’s society. I am strongly interested in all areas of work, especially information technology. 
      I am passionately committed to promoting a positive and dynamic environment in doing my job.
      </h5>
      <div data-aos="fade-right" data-aos-delay="800" data-aos-duration="700">
        <a
          class="btn-accent cursor-pointer flex items-center"
          href="mailto:daitigns@gmail.com"
        >
          <span> Contact Me&nbsp;</span>
          <span
            ><font-awesome-icon class="w-4" :icon="['fas', 'paper-plane']"
          /></span>
        </a>
      </div>
    </div><br><br>
    <div class="profile-image md:w-full flex md:flex-row md:justify-center md:pt-16">
      <img
       
        data-aos-delay="1500"
        data-aos-duration="800"
        :class="`mx-auto m-auto clipped light ismall img-first md:w-auto`"
        src="/src/assets/img/pMAKX62.png"
        alt=""
        width="400"
      />
      <img
        
        data-aos-delay="1700"
        data-aos-duration="800"
        class="mx-auto m-auto clipped light imedium img-center md:w-auto"
        src="/src/assets/img/OpfFUiB.jpg"
        alt=""
        width="400"
      />
      <img
        
        data-aos-delay="1900"
        data-aos-duration="800"
        class="mx-auto m-auto clipped light ismall img-last md:w-auto"
        src="/src/assets/img/33.jpg"
        alt=""
        width="400"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { watch } from "vue";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();


</script>
<style lang="scss" scoped>
.clipped {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
.ismall {
  height: 19rem;
}
.imedium {
  height: 25rem;
}

.img-first {
  margin-left: 12px;
  height: 350px;
  clip-path: polygon(25% 0%, 100.5% 0%, 73% 100%, 0% 100%);
}

.img-center {
  margin-left: -66px;
}

.img-last {
  margin-left: -65px;
  height: 350px;
}

.light {
  filter: grayscale(40%);
  transition: 0.5s ease-out 100ms;
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.03);
    z-index: 999;
  }

  &.colored {
    filter: grayscale(0) !important;
  }
}

// .profile-image {
//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 120px;
//     background: rgba(80, 80, 80, 0.503);
//     width: 25rem;
//     height: 50px;
//     border-radius: 50%;
//     filter: blur(20px);
    
//   }
// }
h2{
   
    font-size: 2.6em;
    color: rgb(35, 37, 37);
}
h5{
   
   font-size: 15px;
   
}
.typewriter{
    position: relative;
}
.typewriter::after{
    content: '|';
    position: absolute;
    right: 0;
    color: #2563eb;
    width: 100%;
    animation: typing 2s steps(14) alternate infinite,
                line 1s infinite;
}
.img-first,
  .img-center,
  .img-last {
   /* margin-left: auto;  Center the images */
    margin-right: .6rem; /* Add space between images */
    width: auto; /* Adjust width to maintain aspect ratio */
    position: sticky; /* Make images sticky */
    top: 0; /* Set the top position for sticky behavior */
  }
@keyframes typing{
    to{
        width: 0%;
    }
}
@keyframes line {
    50%{
      width: 100%;
    }
}
@media (max-width: 768px) {
  
  .ismall {
    height: 12rem; /* Further reduce height for smaller screens */
    width: auto; /* Maintain aspect ratio */
  }

  .imedium {
    height: 15rem; /* Further reduce height for smaller screens */
    width: auto; /* Maintain aspect ratio */
  }

  .img-first,
  .img-center,
  .img-last {
   /* margin-left: auto;  Center the images */
    margin-right: 2rem; /* Add space between images */
    width: auto; /* Adjust width to maintain aspect ratio */
    position: sticky; /* Make images sticky */
    top: 0; /* Set the top position for sticky behavior */
  }

  .light {
    &:hover {
      transform: scale(1.02); /* Adjust hover scale for smaller screens */
    }
  }

  .profile-image {
    &::after {
      width: 12rem; /* Adjust the width of the pseudo element for smaller screens */
      margin-left: 5rem; /* Adjust the margin for smaller screens */
    }
  }

  h2 {
    font-size: 2.3rem; /* Adjust font size for smaller screens */
  }
 
  
}
</style>