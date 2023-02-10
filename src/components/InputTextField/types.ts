// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {
  /**
   * The text value that should be in the text field
   * Parent component will control this component and hence
   * this value will come from its state.
   */
  text?: string;
  /**
   * The label of the input field
   */
  label?: string;
  /**
   * Pass an error string if the text entered indicates an error
   * as per some logic that parent component would decide.
   */
  error?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  handleChange?: (text: string) => void;
}
