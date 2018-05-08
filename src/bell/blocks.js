import inherits from './inherits';
import clone from './clone';

const control = (ScratchBlocks) => {
  //当 |> 被点击
  ScratchBlocks.Blocks['event_whenflagclicked'] = {
    /**
     * Block for when flag clicked.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "event_whenflagclicked",
        "message0": "当 %1 被点击",
        "args0": [
          {
            "type": "field_image",
            "src": require('../../static/images/start.png'),//ScratchBlocks.mainWorkspace.options.pathToMedia + "green-flag.svg",
            "width": 24,
            "height": 24,
            "alt": "flag"
          }
        ],
        "category": ScratchBlocks.Categories.event,
        "extensions": ["colours_control", "shape_hat"]
      });
    }
  };

  // 等待 () 秒
  ScratchBlocks.Blocks['control_wait'] = {
    /**
     * Block to wait (pause) stack.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_wait",
        "message0": "等待 %1 秒",
        "args0": [
          {
            "type": "input_value",
            "name": "DURATION"
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  // 等待 <> 成立，运行
  ScratchBlocks.Blocks['control_wait_until'] = {
    /**
     * Block to wait until a condition becomes true.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_wait_until",
        "message0": "等待 %1 成立，运行",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  // 重复 () 次，运行
  ScratchBlocks.Blocks['control_repeat'] = {
    /**
     * Block for repeat n times (external number).
     * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_repeat",
        "message0": "重复 %1 次，运行",
        "message1": "%1", // Statement
        "message2": "%1", // Icon
        "lastDummyAlign2": "RIGHT",
        "args0": [
          {
            "type": "input_value",
            "name": "TIMES"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args2": [
          {
            "type": "field_image",
            "src": require('../../static/images/repeat.png'),//ScratchBlocks.mainWorkspace.options.pathToMedia + "repeat.svg",
            "width": 24,
            "height": 24,
            "alt": "*",
            "flip_rtl": true
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  // 重复，运行
  ScratchBlocks.Blocks['control_forever'] = {
    /**
     * Block for repeat n times (external number).
     * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5eke39
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_forever",
        "message0": "重复，运行",
        "message1": "%1", // Statement
        "message2": "%1", // Icon
        "lastDummyAlign2": "RIGHT",
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args2": [
          {
            "type": "field_image",
            "src": require('../../static/images/repeat.png'),//ScratchBlocks.mainWorkspace.options.pathToMedia + "repeat.svg",
            "width": 24,
            "height": 24,
            "alt": "*",
            "flip_rtl": true
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_end"]
      });
    }
  };

  // 当条件 <> 成立时，循环运行
  ScratchBlocks.Blocks['control_repeat_until'] = {
    /**
     * Block for repeat until a condition becomes true.
     */
    init: function() {
      this.jsonInit({
        "id": "control_repeat_until",
        "message0": "当条件 %1 成立时，循环运行",
        "message1": "%1",
        "message2": "%1",
        "lastDummyAlign2": "RIGHT",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args2": [
          {
            "type": "field_image",
            "src": require('../../static/images/repeat.png'),//ScratchBlocks.mainWorkspace.options.pathToMedia + "repeat.svg",
            "width": 24,
            "height": 24,
            "alt": "*",
            "flip_rtl": true
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  // 跳出
  ScratchBlocks.Blocks['control_break'] = {
    /**
     * Block for "delete this clone."
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_break",
        "message0": "跳出",
        "args0": [
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_end"]
      });
    }
  };

  // 如果条件 <> 成立， 那么执行
  ScratchBlocks.Blocks['control_if'] = {
    /**
     * Block for if-then.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_if",
        "message0": "如果条件 %1 成立，那么执行",
        "message1": "%1", // Statement
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };

  // 如果条件 <> 成立，那么执行
  // 否则执行
  ScratchBlocks.Blocks['control_if_else'] = {
    /**
     * Block for if-else.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "id": "control_if_else",
        "message0": "如果条件 %1 成立，那么执行",
        "message1": "%1",
        "message2": "否则执行",
        "message3": "%1",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION",
            "check": "Boolean"
          }
        ],
        "args1": [
          {
            "type": "input_statement",
            "name": "SUBSTACK"
          }
        ],
        "args3": [
          {
            "type": "input_statement",
            "name": "SUBSTACK2"
          }
        ],
        "category": ScratchBlocks.Categories.control,
        "extensions": ["colours_control", "shape_statement"]
      });
    }
  };
};

const motion = (ScratchBlocks) => {
  ScratchBlocks.Blocks['motion_fly_to_a_height_of'] = {

    init: function () {
      this.jsonInit({
        "message0": "起飞到 %1 米",
        "args0": [
          {
            "type": "input_value",
            "name": "METERS"
          }
        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  ScratchBlocks.Blocks['motion_fly_towards_for_seconds'] = {

    init: function() {
      this.jsonInit({
        "message0": "无人机 %1 飞行 %2 秒",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DIRECTION",
            "options": [
              [ '向前', 'front' ],
              [ '向后', 'behind' ],
              [ '向左', 'left' ],
              [ '向右', 'right' ]
            ]
          },
          {
            "type": "input_value",
            "name": "SECONDS"
          }
        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  ScratchBlocks.Blocks['motion_turn_left_right_angles'] = {

    init: function() {
      this.jsonInit({
        "message0": "无人机 %1 角度 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DIRECTION",
            "options": [
              [ '左转', 'left' ],
              [ '右转', 'right' ]
            ]
          },
          {
            "type": "input_value",
            "name": "DEGREES"
          }
        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  ScratchBlocks.Blocks['motion_fly_up_down_for_seconds'] = {

    init: function() {
      this.jsonInit({
        "message0": "无人机 %1 时长 %2 秒",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DIRECTION",
            "options": [
              [ '上升', 'up' ],
              [ '下降', 'down' ]
            ]
          },
          {
            "type": "input_value",
            "name": "SECONDS"
          }
        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  // 空中弹跳
  ScratchBlocks.Blocks['motion_bounce'] = {
    init: function() {
      this.jsonInit({
        "message0": "空中弹跳",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  // 空中弹跳
  ScratchBlocks.Blocks['motion_zpath_dive'] = {
    init: function() {
      this.jsonInit({
        "message0": "Z字俯冲",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  // 空中旋转
  ScratchBlocks.Blocks['motion_aerial_rotation'] = {
    init: function() {
      this.jsonInit({
        "message0": "空中旋转",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  // 螺旋上升
  ScratchBlocks.Blocks['motion_spiral_rise'] = {
    init: function() {
      this.jsonInit({
        "message0": "螺旋上升",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  // 空中投弹
  ScratchBlocks.Blocks['motion_air_bomb'] = {
    init: function() {
      this.jsonInit({
        "message0": "空中投弹",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  ScratchBlocks.Blocks['motion_hover_for_seconds'] = {
    init: function() {
      this.jsonInit({
        "message0": "无人机悬停 %1 秒",
        "args0": [
          {
            "type": "input_value",
            "name": "SECONDS"
          }
        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };

  ScratchBlocks.Blocks['motion_land'] = {
    init: function() {
      this.jsonInit({
        "message0": "无人机着陆",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.motion,
        "extensions": [ "colours_motion", "shape_statement" ]
      });
    }
  };
};

const operator = (ScratchBlocks) => {
  ScratchBlocks.Blocks['operator_arithmetic'] = {

    init: function() {
      this.jsonInit({
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "OPERATOR",
            "options": [
              [ '+', '+' ],
              [ '-', '-' ],
              [ '*', '*' ],
              [ '/', '/' ]
            ]
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_number"]
      });
    }
  };

  ScratchBlocks.Blocks['oeprator_logic_operation'] = {
    init: function() {
      this.jsonInit({
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "LOGIC1",
            "check": "Boolean"
          },
          {
            "type": "field_dropdown",
            "name": "OPERATOR",
            "options": [
              [ '与', 'and' ],
              [ '或', 'or' ]
            ]
          },
          {
            "type": "input_value",
            "name": "LOGIC2",
            "check": "Boolean"
          }
        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_boolean"]
      });
    }
  };

  ScratchBlocks.Blocks['operator_not'] = {
    /**
     * Block for "not" unary boolean operator.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit({
        "message0": "非 %1",
        "args0": [
          {
            "type": "input_value",
            "name": "OPERAND",
            "check": "Boolean"
          }
        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_boolean"]
      });
    }
  };

  ScratchBlocks.Blocks['operator_true'] = {
    init: function() {
      this.jsonInit({
        "message0": "真",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_boolean"]
      });
    }
  };

  ScratchBlocks.Blocks['operator_false'] = {
    init: function() {
      this.jsonInit({
        "message0": "假",
        "args0": [

        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_boolean"]
      });
    }
  };

  ScratchBlocks.Blocks['operator_number'] = {
    init: function() {
      this.jsonInit({
        "message0": "%1",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          }
        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_number"]
      });
    }
  };

  ScratchBlocks.Blocks['operator_compare'] = {
    init: function() {
      this.jsonInit({
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "OPERATOR",
            "options": [
              [ '>', '>' ],
              [ '=', '=' ],
              [ '<', '<' ]
            ]
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "category": ScratchBlocks.Categories.operators,
        "extensions": ["colours_operators", "output_boolean"]
      });
    }
  };

  ScratchBlocks.Blocks['operator_random'] = {
    /**
     * Block for picking a random number.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "message0": "随机数从 %1 到 %2",
          "args0": [
            {
              "type": "input_value",
              "name": "FROM"
            },
            {
              "type": "input_value",
              "name": "TO"
            }
          ],
          "category": ScratchBlocks.Categories.operators,
          "extensions": ["colours_operators", "output_number"]
        });
    }
  };

  ScratchBlocks.Blocks['operator_abs'] = {
    /**
     * Block for "advanced" math ops on a number.
     * @this Blockly.Block
     */
    init: function() {
      this.jsonInit(
        {
          "message0": "绝对值 %1",
          "args0": [
            {
              "type": "input_value",
              "name": "NUM"
            }
          ],
          "category": ScratchBlocks.Categories.operators,
          "extensions": ["colours_operators", "output_number"]
        });
    }
  };
};

export default function(ScratchBlocks) {
  control(ScratchBlocks);
  motion(ScratchBlocks);
  operator(ScratchBlocks);

  // 变量/函数字符串替换
  // Context menus
  ScratchBlocks.Msg.DUPLICATE_BLOCK = '复制';//'Duplicate';
  ScratchBlocks.Msg.ADD_COMMENT = '添加注释';//'Add Comment';
  ScratchBlocks.Msg.REMOVE_COMMENT = '删除注释';//'Remove Comment';
  ScratchBlocks.Msg.DELETE_BLOCK = '删除语句块';//'Delete Block';
  ScratchBlocks.Msg.DELETE_X_BLOCKS = '删除 %1 条语句块';//'Delete %1 Blocks';
  ScratchBlocks.Msg.DELETE_ALL_BLOCKS = '删除所有 %1 条语句块?';//'Delete all %1 blocks?';
  ScratchBlocks.Msg.CLEAN_UP = '整理语句块';//'Clean up Blocks';
  ScratchBlocks.Msg.HELP = '帮助';//'Help';
  ScratchBlocks.Msg.UNDO = '撤销';//'Undo';
  ScratchBlocks.Msg.REDO = '重做';//'Redo';
  ScratchBlocks.Msg.EDIT_PROCEDURE = '编辑';//'Edit';
  ScratchBlocks.Msg.SHOW_PROCEDURE_DEFINITION = '跳到定义处';//'Go to definition';

  // Variables
  // @todo Remove these once fully managed by Scratch VM / Scratch GUI
  ScratchBlocks.Msg.CHANGE_VALUE_TITLE = '修改变量:';//'Change value:';
  ScratchBlocks.Msg.RENAME_VARIABLE = '重命名变量:';//'Rename variable';
  ScratchBlocks.Msg.RENAME_VARIABLE_TITLE = '将所有 "%1" 变量改为:';//'Rename all "%1" variables to:';
  ScratchBlocks.Msg.RENAME_VARIABLE_MODAL_TITLE = '重命名变量';//'Rename Variable';
  ScratchBlocks.Msg.NEW_VARIABLE = '创建一个变量';//'Make a Variable';
  ScratchBlocks.Msg.NEW_VARIABLE_TITLE = '新变量名字:';//'New variable name:';
  ScratchBlocks.Msg.VARIABLE_MODAL_TITLE = '新变量';//'New Variable';
  ScratchBlocks.Msg.VARIABLE_ALREADY_EXISTS = '变量名 "%1" 已经存在了!';//'A variable named "%1" already exists.';
  ScratchBlocks.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = '变量名 "%1" 已经存在了!';//'A variable named "%1" already exists for another variable of type "%2".';
  ScratchBlocks.Msg.DELETE_VARIABLE_CONFIRMATION = '删除变量 "%2" 的 %1 处使用?';//'Delete %1 uses of the "%2" variable?';
  ScratchBlocks.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = '无法删除变量 "%1",因为它被 "%2" 函数定义使用了!';//'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
  ScratchBlocks.Msg.DELETE_VARIABLE = '删除变量 "%1"';//'Delete the "%1" variable';

  // Custom Procedures
  // @todo Remove these once fully managed by Scratch VM / Scratch GUI
  ScratchBlocks.Msg.NEW_PROCEDURE = '创建一个函数';//'Make a Block';
  ScratchBlocks.Msg.PROCEDURE_ALREADY_EXISTS = '函数 "%1" 已经存在了!';//'A procedure named "%1" already exists.';
  // Procedures blocks
  ScratchBlocks.Msg.PROCEDURES_DEFINITION = "定义函数 %1";

  /**
    @fileoverview
    Change: @tinychou
    override the DataCategory and remove the flyout button 'Make a list'
    which we do not need in FTLO IDE
  */
  ScratchBlocks.DataCategoryNew = function(workspace) {
    var variableModelList = workspace.getVariablesOfType('');
    variableModelList.sort(ScratchBlocks.VariableModel.compareByName);
    var xmlList = [];

    ScratchBlocks.DataCategory.addCreateButton(xmlList, workspace, 'VARIABLE');

    for (var i = 0; i < variableModelList.length; i++) {
      ScratchBlocks.DataCategory.addDataVariable(xmlList, variableModelList[i]);
    }

    if (variableModelList.length > 0) {
      xmlList[xmlList.length - 1].setAttribute('gap', 24);
      var firstVariable = variableModelList[0];

      ScratchBlocks.DataCategory.addSetVariableTo(xmlList, firstVariable);
      ScratchBlocks.DataCategory.addChangeVariableBy(xmlList, firstVariable);
      // TODO (#1276): uncomment these when their implementations are finished.
      // Blockly.DataCategory.addShowVariable(xmlList, firstVariable);
      // Blockly.DataCategory.addHideVariable(xmlList, firstVariable);
    }
    return xmlList;
  };

  // static props and methods copy
  clone(ScratchBlocks.DataCategoryNew, ScratchBlocks.DataCategory);
  // prototype bound things
  inherits(ScratchBlocks.DataCategoryNew, ScratchBlocks.DataCategory);

  ScratchBlocks.DataCategory = ScratchBlocks.DataCategoryNew;

  delete ScratchBlocks.DataCategoryNew;
  return ScratchBlocks;
};
