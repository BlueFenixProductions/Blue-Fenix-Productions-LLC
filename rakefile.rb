task :s do
  sh 'bundle exec jekyll s'
end

task :build do
  sh 'bundle exec jekyll build --verbose'
end