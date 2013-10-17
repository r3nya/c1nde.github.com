---
layout: default
title: Media queries
---

Или как я верстаю для мобильных девайсов.
На самом деле всё довольно такие тривиально. Берем media queries и погнали. Часть знаний подчерпнул из известного [Bootstrap](http://getbootstrap.com/), часть найдена на просторах интернетов. Кстати, этот самый Bootstrap к третьей версии стал неизмеримо крут в плане адаптивщины, это не считая нового клёвого грида.

Так вот. Рассмотрю на примере техники Apple. Начнем с простейшего iPhone.

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      .legacy-iphone-hidden {
        display: none;
      }
      .legacy-iphone-visible {
        display: block;
      }
    }

Эти запросы подходят для iPhone начиная с самого первого, заканчивая 4S. Поэтому классы имеют префикс legacy. Соответвсенно, всё с классом `legacy-iphone-hidden` будут скрыты, а с классом `legacy-iphone-visible` видны. Пример довольно такие простой, просто чтобы вы начали понимать принцип.

Так же можно обращаться отдельно для портретной и ландшафтной ориентации следующими запросами.

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape) { }
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) { }

Для iPhone 5, 5S и 5C запросы имеют несколько другой вид, пресловутый пятый ряд иконок. Кстати, наверное поэтому оно и называется iPhone 5.

    @media only screen and (min-device-width : 320px) and (max-device-width : 568px) { }

Так же можно добавить ориентацию к запросу.

С iPad действует примерно тот же принцип.

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) { }

Ориентация на **все** модели. И retina, и !retina и даже на mini. Такая вот радость для верстальщиков.

Если вдруг понадобиться обратиться отдельно, то для retina добовляется `-webkit-min-device-pixel-ratio: 2`. Это будет работать только на 3 и 4 поколении(насколько я помню поколения iPad). Для 1 и 2 поколений, а так же для iPad mini это будет `-webkit-min-device-pixel-ratio: 1`.

Так же возможно добовлять ориентации. Таким образом, запрос для iPad с retina дисплеем в ландшафтной ориентации будет таким:

    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio: 2) { }

Вот соблюдая все эти моменты в построении запросов я и делаю мобильную вёрстку.

Кстати, ждем все 22го октября, посмотрим, может будет обновлён iPad mini и Apple поломает этот рай написания запросов на все устройства разом.


{{ page.date | date: "%d %B %Y" }}

[link to this post]({% post_url 2013-10-17-media-queries %})
