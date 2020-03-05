const hello = 'Hello, Chelsea!';
const helloLength = hello.length;
hello[0] = 'E'; // This has no effect, because strings are immutable
hello[0]; // This returns "C"