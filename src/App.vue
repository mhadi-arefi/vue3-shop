<template>
  <!-- header -->
  <header class="fixed-top" dir="rtl">
    <!-- header for pc -->
    <div class="w-full flex justify-between main-container p-2">
      <!-- logo and site name -->
      <router-link to="/">
        <div class="hidden md:flex content-center">
          <img
            src="./assets/image/037-user-2@2x.png"
            class="p-2 w-20 h-20"
            alt="logo"
          />
          <h1 class="mr-1 self-center md:text-xl lg:text-2xl">اسم سایت</h1>
        </div>
      </router-link>
      <!-- end logo and site name -->
      <!-- drawer icon for mobile -->
      <div class="flex md:hidden">
        <img
          src="./assets/image/menu.png"
          class="w-8 h-10 py-2 pl-2 ml-5"
          alt="icon"
          data-toggle="drawer"
          data-target="#drawer-1"
        />
      </div>
      <!-- end drawer icon for mobile -->
      <!-- search box -->
      <div
        class="
          h-10
          md:h-12
          box_search
          self-center
          rounded-lg
          flex
          justify-between
          px-3
        "
      >
        <!-- input search -->
        <input
          type="text"
          class="w-full input_search"
          placeholder="عنوان مد نظر خود را جست و جو کنید ... "
        />
        <!-- end input search -->
        <!-- search icocn -->
        <img
          src="./assets/image/024-loupe@2x.png"
          class="w-4 md:w-6 h-4 md:h-6 self-center"
          alt="search"
        />
        <!-- end search icocn -->
      </div>
      <!-- end search box -->
      <!-- left box for shoping and login -->
      <div class="flex justify-between self-center lg:w-48 xl:w-52">
        <!-- login and singin -->
        <div class="hidden md:flex">
          <span class="self-center">
            <a
              href="#"
              class="log_sing md:text-xs whitespace-nowrap lg:text-base"
              id="myBtn"
              >ورود/ثبت نام</a
            >
          </span>
          <img
            src="./assets/image/037-user@2x.png"
            class="w-10 h-10 p-2"
            alt="user"
          />
        </div>
        <!-- end login and singin -->
        <!-- shopping-cart -->
        <img
          src="./assets/image/111-shopping-cart@2x.png"
          class="w-8 h-8 p-1 mr-3"
          alt="shopping-cart"
        />
        <!-- end shopping-cart -->
      </div>
      <!-- end left box for shoping and login -->
    </div>
    <!-- end header for pc -->
    <!-- nav bar for pc -->
    <nav class="hidden md:flex nav">
      <ul class="flex main-container">
        <li class="flex justify-center content-center p-6">
          <router-link to="/" class="md:text-sm lg:text-base nav_item"
            >خانه</router-link
          >
        </li>
        <li class="flex justify-center content-center p-6">
          <router-link to="/courses" class="md:text-sm lg:text-base nav_item"
            >دوره های آموزشی</router-link
          >
        </li>
        <li class="flex justify-center content-center p-6">
          <router-link to="/events" class="md:text-sm lg:text-base nav_item"
            >رویداد ها</router-link
          >
        </li>
        <li class="flex justify-center content-center p-6">
          <router-link to="/work" class="md:text-sm lg:text-base nav_item"
            >کاریابی</router-link
          >
        </li>
        <li class="flex justify-center content-center p-6">
          <router-link to="/about" class="md:text-sm lg:text-base nav_item"
            >درباره ما</router-link
          >
        </li>
        <li class="flex justify-center content-center p-6">
          <router-link to="/contact-us" class="md:text-sm lg:text-base nav_item"
            >ارتباط با ما</router-link
          >
        </li>
      </ul>
    </nav>
    <!-- end nav bar for pc -->
  </header>
  <!-- end header -->

  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "MyFont";
  src: url("./assets/font/IRANSans.ttf");
}

@import "./assets/base";

header {
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
}
//box search
.box_search {
  background-color: #eeeeee;
  width: 600px;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 500px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}
.input_search {
  background-color: #eeeeee;
}
.input_search::placeholder {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-22) var(--unnamed-font-family-iransans);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  text-align: right;
  color: #707070;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 568px) {
    font-size: 10px;
  }
}
.input_search:focus {
  outline: none;
  border: none;
  background-color: #eeeeee;
}

// cart and log
.log_sing {
  color: #707070;
  margin-left: 5px;
}

// nav
.nav {
  border: 1px solid var(--unnamed-color-bbbbbb);
  border: 1px solid #bbbbbb;
  opacity: 1;
}
.nav_item {
  color: #333333;
}
.nav_item:hover {
  font: var(--unnamed-font-style-normal) normal bold var(--unnamed-font-size-16) /
    var(--unnamed-line-spacing-25) var(--unnamed-font-family-iransans);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-1a2855);
  text-align: center;
  font: normal normal bold 16px/25px IRANSans;
  letter-spacing: 0px;
  color: #1a2855;
  opacity: 1;
}
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
textarea[name="foo"] {
  resize: none;
}
a {
  &.router-link-exact-active {
    font: var(--unnamed-font-style-normal) normal bold
      var(--unnamed-font-size-16) / var(--unnamed-line-spacing-25)
      var(--unnamed-font-family-iransans);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-1a2855);
    text-align: center;
    font: normal normal bold 16px/25px IRANSans;
    letter-spacing: 0px;
    color: #1a2855;
    opacity: 1;
  }
}
</style>
