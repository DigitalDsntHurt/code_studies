def assert condition
  raise unless condition
end

#
# @@fields are class fields, shared by all instances and all subclasses.
# Class fields MUST be initialized.
# Class fields can be accessed by instance methods.
# Class fields can be accessed by singleton methods.
#

class ClassField
  @@class_field = 1

  def field
    @@class_field
  end

  def field=(f)
    @@class_field = f
  end

  def self.class_field
    @@class_field
  end
end

class DerivedClassField < ClassField
  # inherits field, field=, and @@class_field
end

c1 = ClassField.new
c2 = ClassField.new
dc = DerivedClassField.new
c1.field = 2
p c2.field == 2
p dc.field == 2
p ClassField.class_field == 2
p DerivedClassField.class_field == 2