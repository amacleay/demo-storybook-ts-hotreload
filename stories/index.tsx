import React from 'react';
import { storiesOf  } from '@storybook/react';

storiesOf('table', module)
  .add('basic', () => (
    <table>
      <tr>
        <td>one</td><td>two</td>
      </tr>
      <tr>
        <td>three</td><td>four</td>
      </tr>
    </table>
  ));
