desc 'Start Jekyll server and watch Sass files'
task :s do
  puts 'Starting the Jekyll server and watching Sass files.'
  jekyllPid = Process.spawn('jekyll s --livereload --incremental')
  sassPid = Process.spawn('sass --watch css/scss:css --style compressed')

  trap('INT') {
    [jekyllPid, sassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, sassPid].each { |pid| Process.wait(pid) }
end
