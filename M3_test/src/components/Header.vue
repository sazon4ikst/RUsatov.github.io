<template>
  <header class="container header d-flex align-items-center default-color">
    <div class="header_logo">
      <a href="/">
        <img src="assets/img/logo-gray.png" alt />
      </a>
    </div>
    <span class="icon-menu" @click="menuShow = !menuShow" :class="{'icon-menu-active': menuShow}">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </span>
    <nav class="header_menu" :class="{'header_menu-active': menuShow}">
      <ul class="nav d-flex" :class="{'flex-column': menuShow}">
        <li class="nav_item" v-for="link in menu_links" :key="link.id">
          <a :href="link.href" class="nav_link">{{link.name}}</a>
        </li>
      </ul>
    </nav>
    <a href="javascript:void(0);" class="outline_btn header_btn">Оставить заявку</a>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      menu_links: [
        {
          id: 1,
          href: "javascript:void(0);",
          name: "О сервисе"
        },
        {
          id: 2,
          href: "javascript:void(0);",
          name: "Функции"
        },
        {
          id: 3,
          href: "javascript:void(0);",
          name: "Возможности"
        },
        {
          id: 4,
          href: "javascript:void(0);",
          name: "Партнеры"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars.scss";
@import "../assets/scss/utils/mixins.scss";
.header {
  height: rem(94px);
  padding: rem(16px) 0;
  @media screen and (max-width: $desktopWidth) {
    padding: rem(16px) rem(20px);
  }
  @media screen and (max-width: $phoneWidth) {
    flex-wrap: wrap;
  }
  &_logo {
    margin-right: rem(200px);
    @media screen and (max-width: $desktopWidth) {
      margin-right: 0;
    }
    @media screen and (max-width: $phoneWidth) {
      flex: 0 0 48%;
    }
  }
  &_menu {
    @media screen and (max-width: $desktopWidth) {
      margin: 0 auto;
    }
    @media screen and (max-width: $smDesktopWidth) {
      display: none;
      &-active {
        position: absolute;
        top: rem(82px);
        left: 50%;
        background-color: $bg-menu;
        padding: rem(25px);
        border: 1px solid $border-light;

        display: flex;

        text-align: center;

        transform: translatex(-50%);
      }
    }
    @media screen and (max-width: $phoneWidth) {
      &-active {
        top: 90px !important;
      }
    }

    .nav_item {
      &:not(:last-child) {
        margin-right: rem(52px);
        @media screen and (max-width: $desktopWidth) {
          margin-right: rem(25px);
        }
        @media screen and (max-width: $smDesktopWidth) {
          margin-right: 0;
        }
      }
      &:hover {
        color: $active-color;
      }
    }
  }
  &_btn {
    margin-left: auto;

    white-space: nowrap;
    @media screen and (max-width: $desktopWidth) {
      margin-left: 0;
    }
    @media screen and (max-width: $phoneWidth) {
      flex: 0 0 48%;
      margin-left: auto;
    }
  }
}

.icon-menu {
  position: relative;

  display: none;
  width: 1.5333rem;
  height: 0.9333rem;
  margin: 0 auto;
  @media screen and (max-width: $smDesktopWidth) {
    display: block;
  }
  @media screen and (max-width: $phoneWidth) {
    order: 3;
    flex: 0 1 21px;
    margin-top: rem(15px);
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    width: 100%;
    height: 0;

    background-color: $default-color;
    transform: translate(-50%, -50%);
  }
  .line {
    position: absolute;
    left: 0;

    width: 100%;
    height: 1.5px;

    background-color: $default-color;
    // transition: 0s;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;

      transform: translateY(-50%);
    }
    &:last-child {
      bottom: 0;
    }
  }
}
.icon-menu-active {
  &:after,
  &:before {
    width: 1.4667rem;
    height: 0.1333rem;

    background-color: $active-color;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  .line {
    opacity: 0;
  }
}
</style>