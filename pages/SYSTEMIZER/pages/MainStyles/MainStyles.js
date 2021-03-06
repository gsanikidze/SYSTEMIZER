import React from 'react';

// components
import { Paragraph } from 'COMPONENTS/Typography';
import SectionTitle from 'COMPONENTS/SectionTitle';
import CodeHighlight from 'COMPONENTS/CodeHighlight';

// notes
import stylesNote from 'STYLES/stylesNote';

// styles
import './mainStyles.scss';

// db
import colorsArray from 'DB/colorsArray';
import StylesNoteTableGenerator from '../../StylesNoteTableGenerator';

export default () => (
  <div id="main_styles" className="content_layout">

    <section className="one_component">
      <SectionTitle>Main Styles: Colors</SectionTitle>
      <div className="content">

        <div className="samples">
          {
              colorsArray.map((colorName, index) => (
                <div key={colorName + index} className={`color ${colorName}`}>
                  <Paragraph size="tiny" className="label">{colorName.includes('_') ? `$color${colorName}` : `$color_${colorName}`}</Paragraph>
                </div>
              ))
            }
        </div>
        <div className="description">
          <CodeHighlight title="Code Sample">
            {'@import "STYLES/ui_vars.scss";'}
            <br />
            <br />
            {'body {'}
            <br />
            {'    background-color: $color_10_gray;'}
            <br />
            {'    color: $color_70_gray;'}
            <br />
            {'}'}
          </CodeHighlight>
          <StylesNoteTableGenerator noteObj={stylesNote.ui_vars} />
        </div>
      </div>
    </section>

  </div>
);
