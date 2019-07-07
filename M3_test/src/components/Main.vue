<template>
  <section class="container-fluid posr">
    <header_menu class="posa header" />

    <swiper :options="swiperOption" ref="mySwiper" class="preview">
      <!-- slides -->
      <swiper-slide class="d-flex preview-slide preview-slide-1 posr">
        <img src="assets/img/preview.png" alt class="posa preview_img" />
        <div class="container default-color d-flex justify-content-center">
          <div class="preview-block d-flex flex-column align-items-center text-center">
            <h1
              class="title preview_title"
            >Расширяем возможности предоставления качественных медицинских услуг</h1>
            <p
              class="preview_text fz24"
            >«Дневник здоровья» – новый сервис для самоконтроля показателей состояния здоровья, разработанный для участников программы «Мое здоровье».</p>
            <a href="javascript:void(0);" class="main_btn default-color">Узнать больше</a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="d-flex preview-slide preview-slide-1 posr">
        <img src="assets/img/preview.png" alt class="posa preview_img" />
        <div class="container default-color d-flex justify-content-center">
          <div class="preview-block d-flex flex-column align-items-center text-center">
            <h1 class="title preview_title">Получите бесплатный доступ к «Дневнику здоровья»</h1>
            <p
              class="preview_text fz24"
            >Оставьте свою электронную почту и вы узнаете о запуске данного сервиса первым!</p>
            <form method="POST" class="form_send-email d-flex">
              <input type="email" placeholder="Ваш e-mail" class="input send-email_input" />
              <a href="javascript:void(0);" class="main_btn send-email_btn default-color">Отправить</a>
            </form>
          </div>
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination preview-pagination d-flex align-items-center justify-content-center"
        slot="pagination"
      ></div>
    </swiper>

    <div class="dictionary-health--bg">
      <div class="container dictionary-health">
        <h2 class="title dictionary-health_title">Что такое «Дневник здоровья»?</h2>
        <p
          class="dictionary-health_text dictionary-health_text--margin"
        >Дневник пациента — это удобный онлайн-сервис:</p>
        <ul class="dictionary-health_list">
          <li
            class="dictionary-health_item"
          >Вносите результаты измерений вручную или с помощью интегрированных приборов</li>
          <li
            class="dictionary-health_item"
          >Ведите персональную медицинскую карту с историей ваших измерений</li>
          <li
            class="dictionary-health_item"
          >Делитесь результатами измерений со специалистами для повышения эффективности лечения</li>
          <li class="dictionary-health_item">Получайте рекомендации, созданные специально для вас</li>
        </ul>
        <a
          href="javascript:void(0);"
          class="main_btn dictionary-health_btn default-color"
        >Оставить заявку</a>
      </div>
    </div>

    <div class="app-functions">
      <div class="container">
        <h2 class="title text-center app-functions_title">Функции приложения</h2>
        <div class="app-feature_block d-flex">
          <div class="app-feature_col">
            <div class="app-feature_inner d-flex flex-column align-items-center">
              <div class="feature-icon">
                <img src="/assets/img/icons/001-medicine.png" alt />
              </div>
              <p class="feature-text text-center">
                Планирование графика
                <br />приема лекарств
              </p>
            </div>
          </div>
          <div class="app-feature_col">
            <div class="app-feature_inner d-flex flex-column align-items-center">
              <div class="feature-icon">
                <img src="/assets/img/icons/002-siren.png" alt />
              </div>
              <p class="feature-text text-center">
                Уведомление врача
                <br />об исполнении назначений
              </p>
            </div>
          </div>
          <div class="app-feature_col">
            <div class="app-feature_inner d-flex flex-column align-items-center">
              <div class="feature-icon">
                <img src="/assets/img/icons/003-health.png" alt />
              </div>
              <p class="feature-text text-center">
                Ведение дневника
                <br />самочувствия
              </p>
            </div>
          </div>
          <div class="app-feature_col">
            <div class="app-feature_inner d-flex flex-column align-items-center">
              <div class="feature-icon">
                <img src="/assets/img/icons/004-smartwatch.png" alt />
              </div>
              <p class="feature-text text-center">
                Удаленное предоставление
                <br />измерений врачу
              </p>
            </div>
          </div>
          <div class="app-feature_col">
            <div class="app-feature_inner d-flex flex-column align-items-center">
              <div class="feature-icon">
                <img src="/assets/img/icons/006-conversation.png" alt />
              </div>
              <p class="feature-text text-center">
                Общение с врачами
                <br />через встроенный мессенджер
              </p>
            </div>
          </div>
          <div class="app-feature_col">
            <div class="app-feature_inner d-flex flex-column align-items-center">
              <div class="feature-icon">
                <img src="/assets/img/icons/005-facebook.png" alt />
              </div>
              <p class="feature-text text-center">
                Получение уведомлений
                <br />для выполнения назначений
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // }
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars.scss";
@import "../assets/scss/utils/mixins.scss";

// Шапка
.header {
  left: 50%;
  z-index: 2;

  transform: translatex(-50%);
}

// Пpевью
.preview-slide {
  height: rem(751px);
  @media screen and (max-width: $tableWidth) {
    align-items: center;
  }
  .preview_img {
    height: rem(751px);

    object-fit: cover;
  }
}
.preview-block {
  max-width: rem(742px);
  padding-top: rem(177px);
  @media screen and (max-width: $tableWidth) {
    padding-top: 0;
  }
  @media screen and (max-width: $phoneWidth) {
    padding-top: 25px;
    padding: 25px 20px 0;
  }
  .preview_title {
    margin-bottom: rem(36px);
    @media screen and (max-width: $phoneWidth) {
      line-height: 28px;
    }
  }
  .preview_text {
    max-width: rem(657px);
    margin-bottom: rem(52px);

    line-height: rem(36.04px);
  }
}
.form_send-email {
  width: rem(560px);
  @media screen and (max-width: $phoneWidth) {
    width: 80%;
    flex-direction: column;
  }
}
.send-email_input {
  flex-grow: 1;
  margin-right: rem(41px);

  color: $default-color;

  @media screen and (max-width: $phoneWidth) {
    margin-right: 0;
    margin-bottom: 15px;
    height: 45px;
  }
}
@include placeholder() {
  color: $placeholder-color;

  opacity: 1;
}
@include placeholder_focus() {
  opacity: 0;
}

// Дневник здоpовья
.dictionary-health--bg {
  background: url("/assets/img/pulse.png") no-repeat;
  background-position: right rem(95px) bottom 0;
  @media screen and (max-width: $tableWidth) {
    background-size: 60% !important;
  }
}
.dictionary-health {
  // height: rem(879px);
  padding: rem(227px) 0 rem(264px) rem(500px);

  background: url("/assets/img/mobile_img.png") no-repeat rem(122px) rem(147px);

  @media screen and (max-width: $desktopWidth) {
    padding: rem(227px) 0 rem(264px) rem(365px);

    background: url("/assets/img/mobile_img.png") no-repeat rem(20px) rem(147px);
  }

  @media screen and (max-width: $tableWidth) {
    padding: rem(100px) rem(40px) !important;

    background: unset !important;
  }

  &_title {
    margin-bottom: rem(17px);
    @media screen and (max-width: $tableWidth) {
      text-align: center;
    }
  }
  &_text {
    @media screen and (max-width: $tableWidth) {
      text-align: center;
    }
    &--margin {
      margin-bottom: rem(18px);
    }
  }
  &_list {
    max-width: rem(470px);
    margin-bottom: rem(35px);
    @media screen and (max-width: $tableWidth) {
      margin: 0 auto rem(35px);
    }
  }
  &_item {
    position: relative;

    margin-bottom: rem(18px);
    padding-left: rem(15px);
    &::before {
      content: "";
      position: absolute;
      top: rem(10px);
      left: 0;

      width: rem(5px);
      height: rem(5px);

      background-color: $dot-color;
      border-radius: 50%;
    }
  }
  &_btn {
    width: rem(200px);
    @media screen and (max-width: $tableWidth) {
      margin: 0 auto;
    }
  }
}

// Функции пpиложения
.app-functions {
  position: relative;
  padding: rem(104px) 0 rem(94px);
  background-color: $bg-app-functions;
  &::before {
    $radius: 50%;
    content: "";
    position: absolute;
    bottom: calc(100% - 42.5px);
    left: 0;

    width: 100%;
    height: 85px;

    background-color: $bg-app-functions;
    border-radius: $radius;
  }
  &_title {
    margin-bottom: rem(51px);
  }
}
.app-feature {
  $gap: rem(20px);
  &_block {
    flex-wrap: wrap;
    max-width: 100%;
    margin-right: -$gap;
    margin-left: -$gap;
    @media screen and (max-width: $tableWidth) {
      margin-right: 0;
      margin-left: 0;
    }
  }
  &_col {
    flex: 0 0 33.333333%;
    margin-bottom: rem(73px);
    padding: 0 $gap;
    @media screen and (max-width: $tableWidth) {
      flex: 0 0 50%;
    }
    @media screen and (max-width: $phoneWidth) {
      flex: 0 0 100%;
    }
  }
  &_inner {
    .feature-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(80px);
      min-height: rem(80px);
      margin-bottom: rem(19px);

      border: rem(1px) solid rgba($border-base-light, 0.25);
      border-radius: 50%;
      img {
        max-width: 100%;

        object-fit: contain;
      }
    }
  }
}
</style>
