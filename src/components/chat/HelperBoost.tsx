import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  Microscope,
  Route,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  Code2,
  GraduationCapIcon,
  User,
  Trophy,
  MailIcon,
  MessageSquare,
  Sparkles,
  UserSearch,
  BriefcaseIcon,
  CodeIcon,
  PartyPopper,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
}

// Modern, engaging prompts tailored to showcase AI research expertise
const questions = {
  About: 'Tell me about yourself and your background',
  'Projects/Research': 'Show me your AI research projects and work',
  'Tech Stack': 'What are your technical skills and expertise?',
  Achievements: 'What are your achievements and accomplishments?',
  Connect: 'How can I contact you?',
  Journey: 'Tell me about your career progression and professional roles',
} as const;

const questionConfig = [
  { key: 'About', color: '#00F5FF', icon: User, gradient: 'from-cyan-500 to-blue-500' },
  { key: 'Projects/Research', color: '#FF00FF', icon: Microscope, gradient: 'from-purple-500 to-pink-500' },
  { key: 'Tech Stack', color: '#00FF88', icon: Code2, gradient: 'from-green-500 to-teal-500' },
  { key: 'Achievements', color: '#FFD700', icon: Trophy, gradient: 'from-yellow-500 to-orange-500' },
  { key: 'Connect', color: '#FF1493', icon: MessageSquare, gradient: 'from-pink-500 to-rose-500' },
  { key: 'Journey', color: '#FF6B35', icon: Route, gradient: 'from-orange-500 to-red-500' },
] as const;

// Additional inspiration prompts for the drawer. These prompts encourage
// visitors to explore Rahman's research, achievements and personal interests.
const specialQuestions = [
  'Who are you?',
  'Can I see your resume?',
  'What projects are you most proud of?',
  'What are your skills?',
  'How can I reach you?',
  "What's the craziest thing you've ever done?",
  'Tell me about your achievements.',
  'Tell me about your work experience.',
  'What technologies do you use for MLOps?',
  'What are your research interests nowadays?',
];

// Grouped questions by category used in the drawer. These have been adapted
// to remove references to mountain biking and emphasize Rahman's education
// and research. Visitors can explore different aspects of his work and life.
const questionsByCategory = [
  {
    id: 'me',
    name: 'Me',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What are your passions?',
      'How did you get started in tech?',
      'Where do you see yourself in 5 years?',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Can I see your resume?',
      'What makes you a valuable team member?',
      'Tell me about your work experience and roles you have held.',
      'Where are you working now?',
      'Why should I hire you?',
      "What's your educational background?",
      'What technologies do you use for MLOps?',
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeIcon,
    questions: ['What projects are you most proud of?', 'What are you researching now?'],
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: GraduationCapIcon,
    questions: [
      'What are your skills?',
      'How was your experience at Texas Tech University?',
      'What tools do you use for MLOps?',
    ],
  },
  {
    id: 'fun',
    name: 'Fun',
    icon: PartyPopper,
    questions: [
      "What's the craziest thing you've ever done?",
      'Mac or PC?',
      'What are you certain about that 90% get wrong?',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Future',
    icon: MailIcon,
    questions: [
      'How can I reach you?',
      "What kind of project would make you say 'yes' immediately?",
      'Where are you located?',
    ],
  },
] as const;

// Animated Chevron component used in the tooltip
const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  setInput,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery) {
      submitQuery(questions[questionKey as keyof typeof questions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
    }
    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          {/* Toggle Button */}
          <div
            className={
              isVisible ? 'mb-2 flex justify-center' : 'mb-0 flex justify-center'
            }
          >
            <button
              onClick={toggleVisibility}
              className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
            >
              {isVisible ? (
                <>
                  <ChevronDown size={14} />
                  Hide quick questions
                </>
              ) : (
                <>
                  <ChevronUp size={14} />
                  Show quick questions
                </>
              )}
            </button>
          </div>

          {/* HelperBoost Content */}
          {isVisible && (
            <div className="w-full">
              <div
                className="flex w-full flex-wrap gap-1 md:gap-3"
                style={{ justifyContent: 'safe center' }}
              >
                {questionConfig.map(({ key, color, icon: Icon }) => (
                  <Button
                    key={key}
                    onClick={() => handleQuestionClick(key)}
                    variant="outline"
                    className="border-border hover:bg-border/30 h-auto min-w-[120px] flex-shrink-0 cursor-pointer rounded-xl border bg-white/80 px-4 py-3 shadow-none backdrop-blur-sm transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95"
                    style={{transform: 'translateZ(0)', backfaceVisibility: 'hidden'}}
                  >
                    <div className="flex items-center gap-3 text-gray-700">
                      <Icon size={18} strokeWidth={2} color={color} />
                      <span className="text-sm font-medium">{key}</span>
                    </div>
                  </Button>
                ))}

                {/* Need Inspiration Button */}
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Drawer.Trigger className="group relative flex flex-shrink-0 items-center justify-center">
                        <motion.div
                          className="hover:bg-border/30 flex h-auto cursor-pointer items-center space-x-1 rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-900"
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3 text-gray-700">
                            <CircleEllipsis
                              className="h-[20px] w-[18px]"
                              strokeWidth={2}
                            />
                          </div>
                        </motion.div>
                      </Drawer.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <AnimatedChevron />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Content */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs" />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-gray-100 outline-none lg:h-[60%]">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
              <div className="mx-auto max-w-md space-y-4">
                <div
                  aria-hidden
                  className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"
                />
                <div className="mx-auto w-full max-w-md">
                  <div className="space-y-8 pb-16">
                    {questionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// Component for each category section
interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: readonly string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5" />
        <Drawer.Title className="text-[22px] font-medium text-gray-900">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

// Component for each question item with animated chevron
interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-[10px]',
        'text-md px-6 py-4 text-left font-normal',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isSpecial ? 'bg-black' : 'bg-[#F7F8F9]'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: isSpecial ? undefined : '#F0F0F2',
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: isSpecial ? undefined : '#E8E8EA',
      }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-white" />}
        <span className={isSpecial ? 'font-medium text-white' : ''}>
          {question}
        </span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className={cn(
            'h-5 w-5 shrink-0',
            isSpecial ? 'text-white' : 'text-primary'
          )}
        />
      </motion.div>
    </motion.button>
  );
}