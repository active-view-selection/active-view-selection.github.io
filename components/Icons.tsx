import React from 'react';
import { FileText, Github, Database, Video, ChevronRight, ChevronLeft, Brain, Footprints, Eye } from 'lucide-react';

export const Icons = {
  Paper: () => <FileText size={18} className="mr-2" />,
  Code: () => <Github size={18} className="mr-2" />,
  Data: () => <Database size={18} className="mr-2" />,
  Video: () => <Video size={18} className="mr-2" />,
  ArrowRight: () => <ChevronRight size={16} />,
  ArrowLeft: () => <ChevronLeft size={16} />,
  Brain: () => <Brain size={16} className="mr-2 text-green-700" />,
  Footprints: () => <Footprints size={16} className="mr-2 text-slate-600" />,
  Eye: () => <Eye size={16} className="mr-2 text-blue-600" />,
};