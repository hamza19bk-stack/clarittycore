/**
 * ClarittyCore — UK English copy.
 * Angle: essentials first. Strip away the extras, master the fundamentals.
 */
import { enCopy, mergeCopy } from './en-copy';

const siteCopy = {
  home: {
    seo: {
      title: 'Personal trainer: the essentials, done properly',
      description:
        'Training stripped back to what works: a handful of fundamental movements, one-to-one sessions in person or online, and nothing in the plan that does not earn its place.',
    },
    hero: {
      eyebrow: 'Personal training, essentials first',
      titleLead: 'Take away the extras,',
      titleMark: 'what remains is what works',
      lead: 'Most people do not need more exercises, more equipment or more complexity. They need a short list of the right things, done well and done often.',
      visualLabel: 'Fewer things, done better',
    },
    highlights: {
      eyebrow: 'The approach',
      title: 'Short list, high standard',
      subtitle: 'Four principles that decide what survives the cull.',
      items: [
        { title: 'A handful of movements', text: 'A small core of fundamentals you will use for years, rather than a rotating catalogue.' },
        { title: 'Mastery over novelty', text: 'The same movement done better next month beats a new one done badly today.' },
        { title: 'Simple to repeat', text: 'If a plan needs a diagram to follow, it is too complicated to stick to.' },
        { title: 'Equipment optional', text: 'The fundamentals work with very little kit, which removes most excuses.' },
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Strip it back, then build',
      subtitle: 'Four steps from a cluttered routine to a clear one.',
      steps: [
        { title: 'Clear the clutter', text: 'We look at what you are doing now and remove whatever is not doing a job.' },
        { title: 'Choose the core', text: 'A short list of movements that cover the most ground for your goal.' },
        { title: 'Raise the standard', text: 'Those few movements get sharper month after month, which is where the progress lives.' },
        { title: 'Add only when earned', text: 'Something new goes in when the basics are solid, never to make a session feel fuller.' },
      ],
    },
    cta: {
      eyebrow: 'First step',
      title: 'Training feels cluttered?',
      lead: 'Bring whatever you are doing now and we will work out what is actually worth keeping.',
    },
  },
  about: {
    seo: {
      title: 'About: fewer exercises, better executed',
      description: 'Why a short list beats a long one: fundamentals held to a high standard, simple enough to repeat for years.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Simplicity is not',
      titleMark: 'a lack of ambition',
      lead: 'Complicated plans are easy to write and hard to follow. The hard part is deciding what to leave out.',
    },
    philosophy: {
      title: 'Plain, and exacting',
      subtitle: 'Simple does not mean soft.',
      quote: 'Most people do not need more exercises. They need fewer, done better.',
    },
    values: {
      title: 'What the method rests on',
      items: [
        { title: 'Focus', text: 'A short list, protected from everything competing for your attention.' },
        { title: 'Standards', text: 'Execution is judged properly, every session.' },
        { title: 'Simplicity', text: 'Anything you cannot repeat without thinking about it gets simplified.' },
        { title: 'Patience', text: 'Mastery is slow, and it is the part that keeps paying.' },
      ],
    },
  },
  services: {
    seo: {
      title: 'Services: stripped-back personal training',
      description: 'One-to-one sessions in person or online, a written programme and nutrition guidance, all built on a short list of fundamentals.',
    },
    hero: {
      eyebrow: 'The services',
      titleLead: 'Four formats,',
      titleMark: 'one short list',
      lead: 'The format changes with your week. The fundamentals underneath do not.',
    },
  },
  booking: {
    seo: {
      title: 'Booking: work out what matters first',
      description: 'Book a first session to cut your training back to the parts that are actually doing something.',
    },
    hero: {
      eyebrow: 'Booking',
      titleLead: 'Start by deciding',
      titleMark: 'what to leave out',
      lead: 'The first session is often about subtraction: what you can stop doing, and what deserves more attention.',
    },
  },
  contact: {
    seo: {
      title: 'Contact: ask what is worth keeping',
      description: 'Get in touch about simplifying your training down to what genuinely works.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Too much going on',
      titleMark: 'in your training?',
      lead: 'Describe what you do in a normal week and we will tell you honestly what is earning its place.',
    },
  },
};

export const overrides: Record<string, unknown> = mergeCopy(enCopy, siteCopy) as unknown as Record<string, unknown>;
