mkdir test_1 test_2

echo "current tmux sessions"
tmux ls

echo "kill all tmux sessions"
tmux kill-server

declare -a directories=("test_1" "test_2")

for i in "${directories[@]}"
do
cd ${i}
pwd
tmux new -d -s ${i} "ls -la"
cd ..
done