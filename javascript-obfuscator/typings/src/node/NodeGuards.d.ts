import * as ESTree from 'estree';
import { TNodeWithLexicalScope } from '../types/node/TNodeWithLexicalScope';
import { TNodeWithLexicalScopeStatements } from '../types/node/TNodeWithLexicalScopeStatements';
import { TNodeWithSingleStatementBody } from '../types/node/TNodeWithSingleStatementBody';
import { TNodeWithStatements } from '../types/node/TNodeWithStatements';
export declare class NodeGuards {
    private static readonly nodesWithLexicalStatements;
    static isArrayPatternNode(node: ESTree.Node): node is ESTree.ArrayPattern;
    static isArrowFunctionExpressionNode(node: ESTree.Node): node is ESTree.ArrowFunctionExpression;
    static isAssignmentExpressionNode(node: ESTree.Node): node is ESTree.AssignmentExpression;
    static isAssignmentPatternNode(node: ESTree.Node): node is ESTree.AssignmentPattern;
    static isAwaitExpressionNode(node: ESTree.Node): node is ESTree.AwaitExpression;
    static isBigIntLiteralNode(node: ESTree.Node): node is ESTree.BigIntLiteral;
    static isBlockStatementNode(node: ESTree.Node): node is ESTree.BlockStatement;
    static isBreakStatementNode(node: ESTree.Node): node is ESTree.BreakStatement;
    static isCallExpressionNode(node: ESTree.Node): node is ESTree.CallExpression;
    static isClassBodyNode(node: ESTree.Node): node is ESTree.ClassBody;
    static isClassDeclarationNode(node: ESTree.Node): node is ESTree.ClassDeclaration & {
        id: ESTree.Identifier;
    };
    static isConditionalExpressionNode(node: ESTree.Node): node is ESTree.ConditionalExpression;
    static isContinueStatementNode(node: ESTree.Node): node is ESTree.ContinueStatement;
    static isDirectiveNode(node: ESTree.Node): node is ESTree.Directive;
    static isDoWhileStatementNode(node: ESTree.Node): node is ESTree.DoWhileStatement;
    static isExportAllDeclarationNode(node: ESTree.Node): node is ESTree.ExportAllDeclaration;
    static isExportNamedDeclarationNode(node: ESTree.Node): node is ESTree.ExportNamedDeclaration;
    static isExportSpecifierNode(node: ESTree.Node): node is ESTree.ExportSpecifier;
    static isExpressionStatementNode(node: ESTree.Node): node is ESTree.ExpressionStatement;
    static isForStatementNode(node: ESTree.Node): node is ESTree.ForStatement;
    static isForInStatementNode(node: ESTree.Node): node is ESTree.ForInStatement;
    static isForOfStatementNode(node: ESTree.Node): node is ESTree.ForOfStatement;
    static isFunctionNode(node: ESTree.Node): node is ESTree.Function;
    static isFunctionDeclarationNode(node: ESTree.Node): node is ESTree.FunctionDeclaration & {
        id: ESTree.Identifier;
    };
    static isFunctionExpressionNode(node: ESTree.Node): node is ESTree.FunctionExpression;
    static isIdentifierNode(node: ESTree.Node): node is ESTree.Identifier;
    static isIfStatementNode(node: ESTree.Node): node is ESTree.IfStatement;
    static isIfStatementNodeWithSingleStatementBody(node: ESTree.Node): node is ESTree.IfStatement;
    static isImportDeclarationNode(node: ESTree.Node): node is ESTree.ImportDeclaration;
    static isImportExpressionNode(node: ESTree.Node): node is ESTree.ImportExpression;
    static isImportSpecifierNode(node: ESTree.Node): node is ESTree.ImportSpecifier;
    static isLabelIdentifierNode(node: ESTree.Node, parentNode: ESTree.Node): node is ESTree.Identifier;
    static isLabeledStatementNode(node: ESTree.Node): node is ESTree.LabeledStatement;
    static isLiteralNode(node: ESTree.Node): node is ESTree.Literal;
    static isLogicalExpressionNode(node: ESTree.Node): node is ESTree.LogicalExpression;
    static isMemberExpressionNode(node: ESTree.Node): node is ESTree.MemberExpression;
    static isMethodDefinitionNode(node: ESTree.Node): node is ESTree.MethodDefinition;
    static isNewExpressionNode(node: ESTree.Node): node is ESTree.NewExpression;
    static isNode(object: Object & {
        type?: string;
    }): object is ESTree.Node;
    static isNodeWithLexicalScope(node: ESTree.Node): node is TNodeWithLexicalScope;
    static isNodeWithBlockLexicalScope(node: ESTree.Node): node is TNodeWithLexicalScope;
    static isNodeWithSingleStatementBody(node: ESTree.Node): node is TNodeWithSingleStatementBody;
    static isNodeWithLexicalScopeStatements(node: ESTree.Node, parentNode: ESTree.Node): node is TNodeWithLexicalScopeStatements;
    static isNodeWithStatements(node: ESTree.Node): node is TNodeWithStatements;
    static isNodeWithComments(node: ESTree.Node): node is ESTree.Node;
    static isObjectPatternNode(node: ESTree.Node): node is ESTree.ObjectPattern;
    static isObjectExpressionNode(node: ESTree.Node): node is ESTree.ObjectExpression;
    static isPrivateIdentifierNode(node: ESTree.Node): node is ESTree.PrivateIdentifier;
    static isProgramNode(node: ESTree.Node): node is ESTree.Program;
    static isPropertyNode(node: ESTree.Node): node is ESTree.Property;
    static isPropertyDefinitionNode(node: ESTree.Node): node is ESTree.PropertyDefinition;
    static isRestElementNode(node: ESTree.Node): node is ESTree.RestElement;
    static isReturnStatementNode(node: ESTree.Node): node is ESTree.ReturnStatement;
    static isSequenceExpressionNode(node: ESTree.Node): node is ESTree.SequenceExpression;
    static isSpreadElementNode(node: ESTree.Node): node is ESTree.SpreadElement;
    static isStaticBlockNode(node: ESTree.Node): node is ESTree.StaticBlock;
    static isSuperNode(node: ESTree.Node): node is ESTree.Super;
    static isSwitchCaseNode(node: ESTree.Node): node is ESTree.SwitchCase;
    static isTaggedTemplateExpressionNode(node: ESTree.Node): node is ESTree.TaggedTemplateExpression;
    static isTemplateLiteralNode(node: ESTree.Node): node is ESTree.TemplateLiteral;
    static isThisExpressionNode(node: ESTree.Node): node is ESTree.ThisExpression;
    static isUnaryExpressionNode(node: ESTree.Node): node is ESTree.UnaryExpression;
    static isVariableDeclarationNode(node: ESTree.Node): node is ESTree.VariableDeclaration;
    static isVariableDeclaratorNode(node: ESTree.Node): node is ESTree.VariableDeclarator;
    static isWithStatementNode(node: ESTree.Node): node is ESTree.WithStatement;
    static isWhileStatementNode(node: ESTree.Node): node is ESTree.WhileStatement;
    static isYieldExpressionNode(node: ESTree.Node): node is ESTree.YieldExpression;
}
