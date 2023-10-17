class HomeController < ApplicationController
  before_action :accion_especifica, only: [:index, :listar]

  def accion_especifica
    puts '1++++++++++++++++++++++++++++++++++++++++++++'
  end
  
  def index
    producto = Producto.new(nombre: "Nombre del Producto", descripcion: "Descripción del producto", precio: 19.99)
    # producto.save
    render 'home/index'
  end

  def listar
    puts Producto.all
    render plain: Producto.all.to_json.to_s
  end
end
