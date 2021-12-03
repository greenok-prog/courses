import React from "react";

function CourseInfo() {
  return (
    <div class="courseInfo__header">
      <div class="container-lg courseInfo_title ">
        <div class="row d-flex justify-content-center">
          <div class="courseInfo_title-text col-8">
            <div class="courseInfo_text">
              <h3>Полное руководство по Python 3: от новичка до специалиста</h3>
              <p>
                Изучи Python 3 с нуля - один из самых популярных языков
                программирования в мире + Введение в SQL и PostgreSQL
              </p>
            </div>
            <div class="aboutCourse">
              <p class="aboutCourse_title">Чему вы научитесь:</p>
              <ul class="aboutCourse_list row">
                <li class="aboutCourse_list-item col-6">
                  <img src="/images/done.png" alt="" />
                  Писать простые программы на Python 3
                </li>
                <li class="aboutCourse_list-item col-6">
                  <img src="/images/done.png" alt="" />
                  Как писать простые игры типа крестиков-ноликов
                </li>
                <li class="aboutCourse_list-item col-6">
                  <img src="/images/done.png" alt="" />
                  Использование Jupyter Notebook
                </li>
                <li class="aboutCourse_list-item col-6">
                  <img src="/images/done.png" alt="" />
                  Логика с условиями и циклами
                </li>
                <li class="aboutCourse_list-item col-6">
                  <img src="/images/done.png" alt="" />
                  Лучшие практики по написанию "чистого" кода на Python
                </li>
              </ul>
            </div>
            <div class="courseInfo_description">
              <p class="courseInfo_description-title">Описание</p>
              <p class="courseInfo_description-text">
                Python стабильно входит в ТОП-10 наиболее популярных языков
                программирования. Это именно тот язык с которого стоит начинать
                изучать программирование. Благодаря своей простоте и
                элегантности, Python позволяет новичкам не вникать во множество
                сложных программных понятий и конструкций, присущих другим
                языкам. Короче говоря, если вы только начинаете своё путешествие
                в мир программирования, Python станет отличным выбором в
                качестве вашего первого языка программирования.
              </p>
              <p class="courseInfo_description-text">
                Популярность Python объясняется не только тем, что его легко
                изучать, но и реальными преимуществами языка в смысле его
                профессионального применения для решения сложных проблем
                автоматизации. Python - кросс-платформенный язык и работает под
                Windows, Linux, Mac OS. Множество архитектурных конструкций в
                этом языке строятся без нагромождения абстракций, как часто
                происходит в других ЯП (языках программирования). Огромное
                количество уже готовых библиотек даёт возможность не изобретать
                велосипеды на каждом шагу.
              </p>
            </div>
          </div>
          <div class="courseInfo_card col-3">
            <img src="/images/image 2.png" alt="" />

            <div class="courseInfo_card__body">
              <div class="courseInfo_card__price">9.99$</div>
              <p class="courseInfo_card__text">Этот курс включает:</p>
              <ul class="courseInfo_card__list">
                <li class="courseInfo_card__list-item">
                  <img src="/images/inf.png" alt="" />
                  Полный пожизненный доступ
                </li>
                <li class="courseInfo_card__list-item">
                  <img src="/images/video.png" alt="" />
                  Видеоматериалы
                </li>
                <li class="courseInfo_card__list-item">
                  <img src="/images/task.png" alt="" />
                  Задания
                </li>
              </ul>
            </div>
            <div class="courseInfo_card__footer d-flex justify-content-between">
              <button class="courseInfo_card-buy">Купить сейчас</button>
              <button class="courseInfo_card-like">
                <img src="/images/fav.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
