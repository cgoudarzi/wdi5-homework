class CreateFortunes < ActiveRecord::Migration
  def change
    create_table :fortunes do |t|
      t.integer :month
      t.integer :day
      t.integer :year
      t.string :blood
      t.string :siblings
    end
  end
end
