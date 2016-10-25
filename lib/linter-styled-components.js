'use babel';

import LinterStyledComponentsView from './linter-styled-components-view';
import { CompositeDisposable } from 'atom';

export default {

  linterStyledComponentsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linterStyledComponentsView = new LinterStyledComponentsView(state.linterStyledComponentsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linterStyledComponentsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'linter-styled-components:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linterStyledComponentsView.destroy();
  },

  serialize() {
    return {
      linterStyledComponentsViewState: this.linterStyledComponentsView.serialize()
    };
  },

  toggle() {
    console.log('LinterStyledComponents was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
