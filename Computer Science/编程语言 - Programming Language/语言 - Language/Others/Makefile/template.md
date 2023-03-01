```makefile
# b
CXX = g++
CXXFLAGS = -std=c++14 -Wall -MMD -g
EXEC = writer
OBJECTS = writer.o helloWorld.helloWorld.pb.o
DEPENDS = ${OBJECTS:.o=.d}

${EXEC}: ${OBJECTS}
	${CXX} ${OBJECTS} -o ${EXEC}

-include ${DEPENDS}

.PHONY: clean

clean:
	rm ${OBJECTS} ${DEPENDS} ${EXEC}

```

