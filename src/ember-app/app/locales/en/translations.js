import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba3',
          title: 'Proba3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba3-город-l': IISProba3ГородLForm,
    'i-i-s-proba3-улица-l': IISProba3УлицаLForm,
    'i-i-s-proba3-город-e': IISProba3ГородEForm,
    'i-i-s-proba3-улица-e': IISProba3УлицаEForm
  },

});

export default translations;
