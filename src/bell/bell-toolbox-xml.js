const _start = () => {
  return `
    <category name='起始' colour='#f57649' secondaryColour='#f57649'>
      <block type='event_whenflagclicked' id='event_whenflagclicked'></block>

      <block type='control_wait' id='control_wait'>
        <value name='DURATION'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
      </block>

      <block type='control_wait_until' id='control_wait_until'></block>

      <block type='control_repeat' id='control_repeat'>
        <value name='TIMES'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
      </block>

      <block type='control_forever' id='control_forever'></block>

      <block type='control_repeat_until' id='control_repeat_until'></block>

      <block type='control_break' id='control_break'></block>

      <block type='control_if' id='control_if'></block>

      <block type='control_if_else' id='control_if_else'></block>
    </category>
  `;
};

const _motion = () => {
  return `
    <category name='运动' colour='#45dd56' secondaryColour='#45dd56'>
      <block type='motion_fly_to_a_height_of' id='motion_fly_to_a_height_of'>
        <value name='METERS'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
      </block>

      <block type='motion_fly_towards_for_seconds' id='motion_fly_towards_for_seconds'>
        <value name='SECONDS'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
      </block>

      <block type='motion_turn_left_right_angles' id='motion_turn_left_right_angles'>
        <value name='DEGREES'>
          <shadow type='math_number'>
            <field name='NUM'>10</field>
          </shadow>
        </value>
      </block>

      <block type='motion_fly_up_down_for_seconds' id='motion_fly_up_down_for_seconds'>
        <value name='SECONDS'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
      </block>

      <block type='motion_bounce' id='motion_bounce'></block>

      <block type='motion_zpath_dive' id='motion_zpath_dive'></block>

      <block type='motion_aerial_rotation' id='motion_aerial_rotation'></block>

      <block type='motion_spiral_rise' id='motion_spiral_rise'></block>

      <block type='motion_air_bomb' id='motion_air_bomb'></block>

      <block type='motion_hover_for_seconds' id='motion_hover_for_seconds'>
        <value name='SECONDS'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
      </block>

      <block type='motion_land' id='motion_land'></block>
    </category>
  `;
};

const _operator = () => {
  return `
    <category name='逻辑/运算' colour='#10baf9' secondaryColour='#10baf9'>
      <block type='operator_arithmetic' id='operator_arithmetic'>
        <value name='NUM1'>
          <shadow type='math_number'>
            <field name='NUM'>0</field>
          </shadow>
        </value>
        <value name='NUM2'>
          <shadow type='math_number'>
            <field name='NUM'>0</field>
          </shadow>
        </value>
      </block>

      <block type='oeprator_logic_operation' id='oeprator_logic_operation'>
      </block>

      <block type='operator_not' id='operator_not'></block>

      <block type='operator_true' id='operator_true'></block>

      <block type='operator_false' id='operator_false'></block>

      <block type='operator_number' id='operator_number'>
        <value name='NUM1'>
          <shadow type='math_number'>
            <field name='NUM'>0</field>
          </shadow>
        </value>
      </block>

      <block type='operator_compare' id='operator_compare'>
        <value name='NUM1'>
          <shadow type='math_number'>
            <field name='NUM'>0</field>
          </shadow>
        </value>
        <value name='NUM2'>
          <shadow type='math_number'>
            <field name='NUM'>0</field>
          </shadow>
        </value>
      </block>

      <block type='operator_random' id='operator_random'>
        <value name='FROM'>
          <shadow type='math_number'>
            <field name='NUM'>1</field>
          </shadow>
        </value>
        <value name='TO'>
          <shadow type='math_number'>
            <field name='NUM'>10</field>
          </shadow>
        </value>
      </block>

      <block type='operator_abs' id='operator_abs'>
        <value name='NUM'>
          <shadow type='math_number'>
            <field name='NUM'>0</field>
          </shadow>
        </value>
      </block>
    </category>
  `;
};

const _var = () => {
  return `
    <category name="变量" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">
    </category>
  `;
};

const _func = () => {
  return `
    <category name="函数" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">
    </category>
  `;
};

export {
  _start,
  _motion,
  _operator,
  _var,
  _func
}
