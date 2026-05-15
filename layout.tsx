@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  background: #030303;
  color: #f7f3ed;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #030303;
}

img {
  -webkit-user-drag: none;
  user-select: none;
}

::selection {
  background: #f7f3ed;
  color: #030303;
}
