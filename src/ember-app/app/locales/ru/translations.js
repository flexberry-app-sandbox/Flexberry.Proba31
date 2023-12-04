import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba3ГородLForm from './forms/i-i-s-proba3-город-l';
import IISProba3УлицаLForm from './forms/i-i-s-proba3-улица-l';
import IISProba3ГородEForm from './forms/i-i-s-proba3-город-e';
import IISProba3УлицаEForm from './forms/i-i-s-proba3-улица-e';
import IISProba3ГородModel from './models/i-i-s-proba3-город';
import IISProba3УлицаModel from './models/i-i-s-proba3-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba3-город': IISProba3ГородModel,
    'i-i-s-proba3-улица': IISProba3УлицаModel
  },

  'application-name': 'Proba3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba3',
          title: 'Proba3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proba3: {
          caption: 'Proba3',
          title: 'Proba3',
          'i-i-s-proba3-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-proba3-город-l': {
            caption: 'Город',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba3-город-l': IISProba3ГородLForm,
    'i-i-s-proba3-улица-l': IISProba3УлицаLForm,
    'i-i-s-proba3-город-e': IISProba3ГородEForm,
    'i-i-s-proba3-улица-e': IISProba3УлицаEForm
  },

});

export default translations;
