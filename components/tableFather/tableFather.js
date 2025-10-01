// components/tableFather/tableFather.js
export default function TableFather({ data = [] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {data.map((item, index) => (
          <div 
            key={item.id || index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-32"
          >
            {/* School Title */}
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {item.title || item.name || `Item ${index + 1}`}
            </h2>

            {/* Nested schoolData - only render if it exists */}
            {item.schoolData && item.schoolData.length > 0 && (
              <div className="space-y-3 mt-4">
                {item.schoolData.map((subItem, subIndex) => (
                  <div 
                    key={subItem.id || subIndex}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow p-4"
                  >
                    <p className="text-gray-700 dark:text-gray-300">
                      {subItem.ano || `Item ${subIndex + 1}`}
                    </p>

                    <div className="w-48 h-48 bg-red-500 rounded-full"> adsasdasdasda </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {data.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>Nenhuma informação disponível</p>
          </div>
        )}
      </div>
    </div>
  );
}