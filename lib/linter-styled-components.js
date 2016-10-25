'use babel';

/* eslint-disable import/extensions, import/no-extraneous-dependencies */
import { CompositeDisposable } from 'atom';
/* eslint-disable import/extensions, import/no-extraneous-dependencies */

export default {

  linterStyledComponentsView: null,
  modalPanel: null,
  subscriptions: null,

  activate() {
    require('atom-package-deps').install();

    this.subscriptions = new CompositeDisposable();
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  provideLinter() {
  },
};
