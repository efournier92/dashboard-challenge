class User < ApplicationRecord
  has_many :ticket_escalations
end
