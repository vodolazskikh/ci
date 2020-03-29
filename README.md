### Приложение CI. Клиентская часть.

Использованые библиотеки:

1. Aphrodite для реализации cssInJs подхода, и инкапсуляции стилей внтри компонентов
1. react-redux
1. react-router - для удобной организации роутинга
1. axios - как удобный инструмент для асинхронных запросов
1. redux-thank - в качестве middleware для асинхронных запросов в redux

### Инструкции по запуску кода

npm start - для запуска приложения в dev-режиме

### Трейдофы

1. Валидация поля ввода - за 0s.p. - укажем у инпута тип number,
1. При открытии билда из списка смотрим на первые 4 цифры в хэше коммита для упрощения
1. Были некоторые проблемы с нодой, и некоторые ручки в бэке работают не совсем хорошо :( - в рамках этой таски не стал причесывать бэкенд, так как уже не успевал, потому не вся функциональность была реализована в клиентском приложении, пытался сделать хорошо то, что мог ориентируясь на бэк.
1. Логи в билде не сделал - не успел

### АТЭНШН

Бэк был развернут на localhost:5000 - потому в асинхронных экшенах ссылки на этот урл.
