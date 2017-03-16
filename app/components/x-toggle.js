
import XToggle from 'ember-toggle/components/x-toggle/component';
import ENV from '../config/environment';

const config = ENV['ember-toggle'] || {};

export default XToggle.extend({
  theme: config.defaultTheme || 'default',
  defaultOffLabel: config.defaultOffLabel || 'Off::off',
  defaultOnLabel: config.defaultOnLabel || 'On::on',
  showLabels: config.defaultShowLabels || false,
  size: config.defaultSize || 'medium'
});
