class CreateTicketEscalations < ActiveRecord::Migration[7.0]
  def change
    create_table :ticket_escalations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :category
      t.string :title

      t.timestamps
    end
  end
end
