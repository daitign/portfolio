<template>
  <div class="max-w-7xl m-center pt-48">
    <div
      class="skills text-center mt-10"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      <h2 class="text-5xl dark:text-white">Skills</h2>
      <span class="f-gray text-sm dark:text-white">Innovate, Implement, Inspire</span>
    </div>
    <div class="skill-details flex mt-20 flex-col lg:flex-row lg:gap-10">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="lg:w-1/3 md:w-96 md:m-auto md:mb-16 card bg-white drop-shadow-2xl dark:bg-slate-800"
      >
        <h2 class="pt-7 pl-5 flex items-center">
          <font-awesome-icon
            class="fa-2xl pr-3 f-blue w-20"
            :icon="['fas', 'fa-drafting-compass']"
          />
          <div class="flex flex-col">
            <h2 class="text-xl dark:text-white">Graphic Designer</h2>
            <span class="text-sm f-gray dark:text-white"
              >Acquired Skills About</span
            >
          </div>
        </h2>
        <div
          class="description grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-10"
        >
          <!-- <div class="p-1 card-mini">
            <img
              src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png"
              class="h-14"
              alt="VUEJS"
            />
            <span class="dark:text-white">VueJs</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
              class="h-14"
              alt="ReactJs"
            />
            <span class="dark:text-white">ReactJs</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
              class="h-14"
              alt="JavaScript"
            />
            <span class="dark:text-white">JavaScript</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20210506173343"
              class="h-14"
              alt="TypeScript"
            />
            <span class="dark:text-white">TypeScript</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/512px-Nuxt_logo.svg.png?20201218211241"
              class="h-14"
              alt="NuxtJs"
            />
            <span class="dark:text-white">NuxtJs</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://mui.com/static/logo.png"
              class="h-14"
              alt="MaterialUI"
            />
            <span class="dark:text-white">MaterialUI</span>
          </div> -->




          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/3053/PNG/512/adobe_photoshop_macos_bigsur_icon_190436.png"
              class="h-14"
              alt="Photoshop"
            />
            <span class="dark:text-white">Photoshop</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/3070/PNG/512/adobe_indesign_software_computer_app_design_software_icon_191061.png"
              class="h-14"
              alt="Word"
            />
            <span class="dark:text-white">Indesign</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/3053/PNG/512/adobe_lightroom_macos_bigsur_icon_190441.png"
              class="h-14"
              alt="Figma"
            />
            <span class="dark:text-white">Lightroom</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/3070/PNG/512/adobe_illustrator_software_design_graphic_vector_multimedia_icon_191051.png"
              class="h-14"
              alt="Webflow"
            />
            <span class="dark:text-white">Illustrator</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/canva_logo_icon_168460.png"
              class="h-14"
              alt="SEO"
            />
            <span class="dark:text-white">Canva</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png"
              class="h-14"
              alt="Cisco"
            />
            <span class="dark:text-white">Figma</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/3053/PNG/512/adobe_premiere_pro_macos_bigsur_icon_189485.png"
              class="h-14"
              alt="Vegas"
            />
            <span class="dark:text-white">Premiere</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/195/PNG/256/Google_Sketchup_23504.png"
              class="h-14"
              alt="Vegas"
            />
            <span class="dark:text-white">SketchUp</span>
          </div>
          
          <div class="p-1 card-mini">
            <img
              src="https://seeklogo.com/images/C/corel-draw-2020-logo-270FEE465B-seeklogo.com.png"
              class="h-14"
              alt="Vegas"
            />
            <span class="dark:text-white">CorelDRAW</span>
          </div>







          
        </div>
      </div>



      
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="400"
        class="lg:w-1/3 md:w-96 md:m-auto md:mb-16 card bg-white drop-shadow-2xl dark:bg-slate-800"
      >
        <h2 class="pt-7 pl-5 flex items-center">
          <font-awesome-icon
            class="fa-2xl pr-3 f-blue w-20"
            :icon="['fas', 'code-branch']"
          />
          <div class="flex flex-col">
            <h2 class="text-xl dark:text-white">Backend Developer</h2>
            <span class="text-sm f-gray dark:text-white"
              >Acquired Skills About</span
            >
          </div>
        </h2>
        <div
          class="description grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-10"
        >
          <div class="p-1 card-mini">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/121px-Laravel.svg.png"
              class="h-14"
              alt="Laravel"
            />
            <span class="dark:text-white">Laravel</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2108/PNG/512/php_icon_130857.png"
              class="h-14"
              alt="PHP"
            />
            <span class="dark:text-white">PHP</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://pngimg.com/uploads/mysql/mysql_PNG9.png"
              class="h-14"
              alt="Mysql"
            />
            <span class="dark:text-white">Mysql</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_codeigniter-512.png"
              class="h-14"
              alt="CodeIgniter"
            />
            <span class="dark:text-white">CodeIgniter</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146237.png"
              class="h-14"
              alt="CodeIgniter"
            />
            <span class="dark:text-white">AWS</span>
          </div>
          
          
          <!-- <div class="p-1 card-mini">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_A4ygFZawvqLFvYUYfssFpgwAfCGZ7Xs_Ka4hDnmgA&s"
              class="h-14"
              alt="AWS"
            />
            <span class="dark:text-white">AWS</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png"
              class="h-14"
              alt="Docker"
            />
            <span class="dark:text-white">Docker</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cms-assets.tutsplus.com/uploads/users/433/posts/23928/preview_image/Untitled.png"
              class="h-14"
              alt="Laravel Lumen"
            />
            <span class="dark:text-white">Laravel Lumen</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_codeigniter-512.png"
              class="h-14"
              alt="CodeIgniter"
            />
            <span class="dark:text-white">CodeIgniter</span>
          </div> -->
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="600"
        class="lg:w-1/3 md:w-96 md:m-auto md:mb-16 card bg-white drop-shadow-2xl dark:bg-slate-800"
      >
        <h2 class="pt-7 pl-5 flex items-center">
          <font-awesome-icon
            class="fa-2xl pr-3 f-blue w-20"
            :icon="['fas', 'code']"
          />
          <div class="flex flex-col">
            <h2 class="text-xl dark:text-white">Frontend Developer</h2>
            <span class="text-sm f-gray dark:text-white">Acquired Skills About</span>
          </div>
        </h2>
        <div
          class="description grid grid-cols-4 gap-4 m-auto lg:px-10 px-5 pt-10"
        >
        <div class="p-1 card-mini">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
              class="h-14"
              alt="Tailwind"
            />
            <span class="dark:text-white">Tailwind</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
              class="h-14"
              alt="Bootstrap"
            />
            <span class="dark:text-white">Bootstrap</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
              class="h-14"
              alt="Bootstrap"
            />
            <span class="dark:text-white">ReactJS</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
              class="h-14"
              alt="Mysql"
            />
            <span class="dark:text-white">JavaScript</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
              alt="HTML5"
              class="h-14"
            />
            <span class="dark:text-white">HTML5</span>
          </div>
          <div class="p-1 card-mini">
            <img
              src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png"
              class="h-14"
              alt="CSS"
            />
            <span class="dark:text-white">CSS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
