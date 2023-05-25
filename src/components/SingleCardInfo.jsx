const SingleCardInfo = ({title, value, valueIcon}) => {
  return (
    <li className="flex items-center justify-between text-sm pt-3">
      <span className="text-isDark5 text-xs">{title}</span>
      <div className="flex items-center gap-x-1 text-xs">
        {valueIcon}
        <span className="text-isDark font-semibold"> {value} </span>
      </div>
    </li>
  );
};

export default SingleCardInfo;
