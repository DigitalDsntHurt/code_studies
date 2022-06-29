class TiersClass
  def self.class_method
    puts 'this is TiersClass.class_method'
  end
end

module TiersModule
  def self.module_method
    puts 'this is TiersModule.module_method'
  end
end

TiersClass.class_method
TiersModule.module_method
