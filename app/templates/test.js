import test from 'tape';
import <%= camelModuleName %> from '../src';

test('<%= camelModuleName %>', (t) => {
  t.plan(1);
  t.equal(true, <%= camelModuleName %>(), 'return true');
});
