export type SplitLayoutProps = {
  badge: string;
  title?: string;
  heading: React.ReactElement;
  subHeading?: React.ReactElement;                                                                                                                                        
  description: React.ReactNode;
  image?: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  containerClassName?: string;
  boxClassName?: string;
};

