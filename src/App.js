import React from 'react';
import 'bulma/css/bulma.css';
import Title from 'rebul/Title';
import Content from 'rebul/Content';
import Section from 'rebul/Section';
import Container from 'rebul/Container';
import Columns from 'rebul/Columns';
import Column from 'rebul/Column';
import Notification from 'rebul/Notification'

class App extends React.Component {
  render() {
    return (
      <Section>
        <Columns>
          <Column size="three-fifths" offset="one-fifth">
            <Title>Emma Jamieson</Title>
            <p>Software Engineer who loves all things .js, open source and blog writing.</p>
            <Section>
              <Content>
                <h1>Blogs</h1>
                <ul>
                  <li><a href="https://codeburst.io/back-to-basics-declarations-primitive-datatypes-c7f64249b4d9">Back to Basics: Declarations &amp; Primitive Datatypes</a></li>
                  <li><a href="https://medium.com/localz-engineering/travisci-cannot-clone-remote-repository-7f798bdc487b">TravisCI: Cannot clone remote repository?!</a></li>
                  <li><a href="https://medium.com/localz-engineering/track-errors-using-sentry-with-react-native-ba5d145ca1e6">Track errors using Sentry with React Native</a></li>
                  <li><a href="https://medium.com/localz-engineering/react-native-testing-part-1-eea89402a588">React Native Testing: Part 1</a></li>
                </ul>
                <h1>Employment</h1>
                <ul>
                  <li><a href="https://www.skyscanner.net/">Skyscanner</a> (June 2018 - Present)</li>
                  <li><a href="https://localz.com">Localz</a> (August 2016 - June 2018)</li>
                  <li><a href="http://www.ey.com/">Ernst &amp; Young</a> (Feb 2016 - August 2016)</li>
                </ul>
              </Content>
            </Section>
          </Column>
        </Columns>
      </Section>
    );
  }
}

export default App;
