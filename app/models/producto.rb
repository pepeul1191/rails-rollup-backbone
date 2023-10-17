class Producto < ApplicationRecord
  validates :nombre, presence: true
  validates :precio, numericality: { greater_than_or_equal_to: 0 }
end
