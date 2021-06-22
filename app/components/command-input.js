import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommandInputComponent extends Component {
  @tracked inputText = '';

  @action
  submit() {
    this.args.onSubmit(this.inputText);
    this.inputText = '';
  }
}
