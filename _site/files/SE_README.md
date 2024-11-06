# SE Project: BlackPeter
This is a C++ implementation of the card game "Black Peter" (German: "Schwarzer Peter"). \
The implementation encompasses a client/server architecture with an interface that supports multiple players playing the game together. \
It uses wxWidgets for the GUI, sockpp for the network interface, RapidJSON for object serialization, and GoogleTest for the unit tests. \
This is a semester project for the course Software Engineering (FS23) at ETH Zürich.

<span style="display:block;text-align:center">
<img src="" width="20%" align="center">
<img src="/assets/imgs/se_project_blackpeter/logo.jpg" width="50%" align="center">
</span>

## Dependencies
This project works on UNIX(-like) systems (e.g., Linux or macOS). We recommend using a Linux distribution such as Debian or Arch Linux, as it offers the easiest way to install all necessary libraries. The following list contains these libraries:

- wxWidgets (https://www.wxwidgets.org/downloads/; Debian: `libwxgtk3.0-gtk3-dev`, Arch: `wxwidgets-gtk3`)
- GoogleTest (https://github.com/google/googletest/releases/; Debian: `libgtest-dev`, Arch: `gtest`)
- sockpp (provided in-tree)
- RapidJSON (provided in-tree)

The packages wxWidgets and GoogleTest should be installed on the machine. The other libraries, sockpp and RapidJSON, are included in this project and will be downloaded and built together with the Black Peter game.

Example: On a fresh Debian Bullseye installation all dependencies can be satisfied using the following command:
```
sudo apt-get install git cmake g++ libwxgtk3.0-gtk3-dev libgtest-dev -y
```

## Build Instructions
Clone this project, create a build directory and execute first `cmake` and then `make` within it, i.e., execute the following commands:
```
git clone https://gitlab.ethz.ch/sheckers/se_project_blackpeter.git
cd se_project_blackpeter/Implementation
mkdir build/
cd build/
cmake ..
make -j${nproc}
```
This will create 3 executables. `BlackPeter-server` executes the server-side and `BlackPeter-client` the client-side of the BlackPeter Game. The unit-test are executed through `BlackPeter-tests`.
