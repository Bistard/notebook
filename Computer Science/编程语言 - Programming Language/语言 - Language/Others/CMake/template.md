```CMake
# ubasic template

cmake_minimum_required(VERSION 2.8)
project(writer)

set(CMAKE_CXX_COMPILER "g++")
set(CMAKE_SUPPRESS_REGENERATION 1)
set(CMAKE_USE_RELATIVE_PATHS ON)

add_definitions(-g -std=c++11 -W -Wall -Wno-deprecated -fpermissive -Wno-extra)

aux_source_directory(./ SRC_LIST)

include_directories(./)

# link_directories(
#     ${MODULE_PATH}/depends/network/lib
# )

set(OBJ_LIST)

add_executable(${PROJECT_NAME} ${SRC_LIST}) #${OBJ_LIST}
target_link_libraries(${PROJECT_NAME} pthread protobuf)

message(STATUS "(INFO): EVERYTHING IS COMPLETED.")

```

