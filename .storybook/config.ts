import {configure} from "@storybook/react";
import 'theme/GlobalStyle.scss'
configure(require.context('../src/components', true, /\.stories\.tsx?$/), module);