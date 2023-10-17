import 'bootstrap/dist/css/bootstrap.min.css';
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import './styles.css';

var ItemModel = Backbone.Model.extend({
  defaults: {
    texto: 'Item por defecto'
  }
});

var ItemView = Backbone.View.extend({
  tagName: 'li',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.model.get('texto'));
    $('#lista').append(this.el);
    return this;
  }
});

// Creamos una instancia del modelo
var itemModel = new ItemModel({ texto: 'Primer elemento' });

// Creamos una instancia de la vista y le pasamos el modelo
var itemView = new ItemView({ model: itemModel });

// Podemos cambiar el texto y volver a renderizar
itemModel.set('texto', 'Nuevo texto');

alert('xdddd')