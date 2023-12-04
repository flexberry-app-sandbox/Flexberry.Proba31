import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  улица: DS.belongsTo('i-i-s-proba3-улица', { inverse: null, async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-proba3-город.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-proba3-город.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородE', 'i-i-s-proba3-город', {
    назв: attr('Назв', { index: 0 }),
    улица: belongsTo('i-i-s-proba3-улица', 'Улица', {
      назв: attr('Назв', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'назв' })
  });

  modelClass.defineProjection('ГородL', 'i-i-s-proba3-город', {
    назв: attr('Назв', { index: 0 }),
    улица: belongsTo('i-i-s-proba3-улица', 'Назв', {
      назв: attr('Назв', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
