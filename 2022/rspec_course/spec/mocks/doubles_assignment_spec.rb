RSpec.describe 'doubles' do
  it "tests the student's knowledge of the course's content" do
    # db_connection = double('Database Connection')
    # allow(db_connection).to receive(:connect).and_return(true)
    # allow(db_connection).to receive(:disconnect).and_return('Goodbye')
    db = double('Database Connection', connect: true, disconnect: 'Goodbye')
    expect(db.connect).to eq(true)
    expect(db.disconnect).to eq('Goodbye')
  end
end

RSpec.describe 'doubles' do
  it "tests the student's knowledge of the course's content" do
    fs = double('File System')
    allow(fs).to receive(:read).and_return('Romeo and Juliet')
    allow(fs).to receive(:write).and_return(false)
  end
end
